import type { FunctionDeclaration, Node } from "@babel/types";

import StaticJsGlobalEnvironmentRecord from "../../runtime/environments/implementation/StaticJsGlobalEnvironmentRecord.js";

import { Completion } from "../completions/Completion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import createFunction from "../node-evaluators/Function.js";

import varDeclaredNames from "./algorithms/var-declared-names.js";
import varScopedDeclarations from "./algorithms/var-scoped-declarations.js";
import hasLexicalDeclaration from "./algorithms/has-lexical-declaration.js";
import StaticJsObjectEnvironmentRecord from "../../runtime/environments/implementation/StaticJsObjectEnvironmentRecord.js";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";
import boundNames from "./algorithms/bound-names.js";
import canDeclareGlobalVar from "./algorithms/can-declare-global-var.js";
import canDeclareGlobalFunction from "./algorithms/can-declare-global-function.js";
import collectAnnexBFunctionDeclarations from "./algorithms/collect-annex-b-function-declarations.js";
import createGlobalVarBinding from "./algorithms/create-global-var-binding.js";
import lexicallyScopedDeclarations from "./algorithms/lexically-scoped-declarations.js";
import createGlobalFunctionBinding from "./algorithms/create-global-function-binding.js";

export default function* evalDeclarationInstantiation(
  body: Node,
  strict: boolean,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const { variableEnv: varEnv, lexicalEnv: lexEnv, realm } = context;

  const varNames = varDeclaredNames(body);
  const varDeclarations = varScopedDeclarations(body);

  if (!strict) {
    if (varEnv instanceof StaticJsGlobalEnvironmentRecord) {
      for (const name of varNames) {
        const hasLexical = yield* hasLexicalDeclaration(name, varEnv);
        if (hasLexical) {
          throw Completion.Throw(
            realm.types.error("SyntaxError", `${name} has already been declared`),
          );
        }
      }
    }

    let thisEnv = lexEnv;
    while (thisEnv != varEnv) {
      if (!(thisEnv instanceof StaticJsObjectEnvironmentRecord)) {
        for (const name of varNames) {
          const hasBinding = yield* thisEnv.hasBindingEvaluator(name);
          if (hasBinding) {
            throw Completion.Throw(
              realm.types.error("SyntaxError", `${name} has already been declared`),
            );
          }
        }
      }

      if (thisEnv.outerEnv == null) {
        throw new StaticJsEngineError(
          "EvalDeclarationInstantiation: Environment chain terminated before reaching object environment record",
        );
      }
      thisEnv = thisEnv.outerEnv;
    }
  }

  // TODO: Private env

  const functionsToInitialize: FunctionDeclaration[] = [];
  const declaredFunctionNames = new Set<string>();

  for (const d of varDeclarations.reverse()) {
    if (d.type === "FunctionDeclaration") {
      const fn = boundNames.soleElementOf(d);
      if (declaredFunctionNames.has(fn)) {
        continue;
      }

      if (varEnv instanceof StaticJsGlobalEnvironmentRecord) {
        const fnDefinable = yield* canDeclareGlobalFunction(fn, varEnv);
        if (!fnDefinable) {
          throw Completion.Throw(
            realm.types.error("TypeError", `Cannot declare global function ${fn}`),
          );
        }
      }

      declaredFunctionNames.add(fn);
      functionsToInitialize.unshift(d);
    }
  }

  const declaredVarNames = new Set<string>();
  for (const d of varDeclarations) {
    if (d.type !== "VariableDeclaration") {
      continue;
    }

    for (const vn of boundNames(d)) {
      if (declaredFunctionNames.has(vn)) {
        continue;
      }

      if (varEnv instanceof StaticJsGlobalEnvironmentRecord) {
        const fnDefinable = yield* canDeclareGlobalVar(vn, varEnv);
        if (!fnDefinable) {
          throw Completion.Throw(
            realm.types.error("TypeError", `Cannot declare global variable ${vn}`),
          );
        }
      }

      declaredVarNames.add(vn);
    }
  }

  if (!strict) {
    const declaredFunctionOrVarNames = new Set<string>([
      ...declaredFunctionNames,
      ...declaredVarNames,
    ]);

    const declarations = collectAnnexBFunctionDeclarations(body);
    for (const f of declarations) {
      if (!f.id || f.id.type !== "Identifier") {
        continue;
      }

      const F = f.id.name;

      // TODO: There's some notes about "if replacing the FunctionDeclaration with a VariableStatement ... would not produce any EarlyErrors for script"
      // What does that mean?  How can we tell?

      let bindingExists = false;
      let thisEnv = lexEnv;
      while (thisEnv !== varEnv) {
        if (!(thisEnv instanceof StaticJsObjectEnvironmentRecord)) {
          const hasBinding = yield* thisEnv.hasBindingEvaluator(F);
          if (hasBinding) {
            bindingExists = true;
          }
        }

        thisEnv = thisEnv.outerEnv!;
      }

      let fnDefinable: boolean;
      if (!bindingExists && varEnv instanceof StaticJsGlobalEnvironmentRecord) {
        if (!hasLexicalDeclaration(F, varEnv)) {
          fnDefinable = yield* canDeclareGlobalVar(F, varEnv);
        } else {
          fnDefinable = false;
        }
      } else {
        fnDefinable = true;
      }

      if (!bindingExists && fnDefinable) {
        if (!declaredFunctionOrVarNames.has(F)) {
          if (varEnv instanceof StaticJsGlobalEnvironmentRecord) {
            yield* createGlobalVarBinding(F, false, varEnv, realm);
          } else {
            bindingExists = yield* varEnv.hasBindingEvaluator(F);
            if (!bindingExists) {
              yield* varEnv.createMutableBindingEvaluator(F, true);
              yield* varEnv.initializeBindingEvaluator(F, realm.types.undefined);
            }
          }
          declaredFunctionOrVarNames.add(F);
        }

        f.extra = { ...f.extra, annexBHoisted: F };
      }
    }
  }

  const lexDeclarations = lexicallyScopedDeclarations(body);
  for (const d of lexDeclarations) {
    for (const dn of boundNames(d)) {
      if (d.type === "VariableDeclaration" && d.kind === "const") {
        yield* lexEnv.createImmutableBindingEvaluator(dn, true);
      } else {
        yield* lexEnv.createMutableBindingEvaluator(dn, false);
      }
    }
  }

  for (const f of functionsToInitialize) {
    const fn = boundNames.soleElementOf(f);
    const fo = createFunction(fn, f, context);
    if (varEnv instanceof StaticJsGlobalEnvironmentRecord) {
      yield* createGlobalFunctionBinding(fn, fo, true, varEnv, realm);
    } else {
      const bindingExists = yield* varEnv.hasBindingEvaluator(fn);
      if (!bindingExists) {
        yield* varEnv.createMutableBindingEvaluator(fn, true);
        yield* varEnv.initializeBindingEvaluator(fn, fo);
      } else {
        yield* varEnv.setMutableBindingEvaluator(fn, fo, false);
      }
    }
  }

  for (const vn of declaredVarNames) {
    if (varEnv instanceof StaticJsGlobalEnvironmentRecord) {
      yield* createGlobalVarBinding(vn, true, varEnv, realm);
    } else {
      const bindingExists = yield* varEnv.hasBindingEvaluator(vn);
      if (!bindingExists) {
        yield* varEnv.createMutableBindingEvaluator(vn, true);
        yield* varEnv.initializeBindingEvaluator(vn, realm.types.undefined);
      }
    }
  }
}
