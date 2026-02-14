import { type Node, isVariableDeclaration } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import StaticJsGlobalEnvironmentRecord from "../../runtime/environments/implementation/StaticJsGlobalEnvironmentRecord.js";

import type EvaluationContext from "../EvaluationContext.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import createFunction from "../node-evaluators/Function.js";

import lexicallyDeclaredNames from "./algorithms/lexically-declared-names.js";
import varDeclaredNames from "./algorithms/var-declared-names.js";
import hasRestrictedGlobalProperty from "./algorithms/has-restricted-global-property.js";
import varScopedDeclarations from "./algorithms/var-scoped-declarations.js";
import boundNames from "./algorithms/bound-names.js";
import lexicallyScopedDeclarations from "./algorithms/lexically-scoped-declarations.js";
import hasLexicalDeclaration from "./algorithms/has-lexical-declaration.js";
import canDeclareGlobalVar from "./algorithms/can-declare-global-var.js";
import canDeclareGlobalFunction from "./algorithms/can-declare-global-function.js";
import collectAnnexBFunctionDeclarations from "./algorithms/collect-annex-b-function-declarations.js";
import createGlobalVarBinding from "./algorithms/create-global-var-binding.js";
import createGlobalFunctionBinding from "./algorithms/create-global-function-binding.js";

export default function* globalDeclarationInstantiation(
  node: Node,
  // Note: Officially we should take in the GlobalEnvironmentRecord, but our createFunction needs
  // the context...  Should take a look at the 'official' way to create functions and fix this.
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const { strict, realm } = context;
  const env = context.lexicalEnv;
  if (!(env instanceof StaticJsGlobalEnvironmentRecord)) {
    throw new StaticJsEngineError(
      "globalDeclarationInstantiation called with non-global environment",
    );
  }

  const lexNames = lexicallyDeclaredNames(node);
  const varNames = varDeclaredNames(node);

  for (const name of lexNames) {
    const hasBinding = yield* hasLexicalDeclaration(name, env);
    if (hasBinding) {
      throw new ThrowCompletion(
        realm.types.error("SyntaxError", `${name} has already been declared`),
      );
    }

    const restricted = yield* hasRestrictedGlobalProperty(name, env);
    if (restricted) {
      throw new ThrowCompletion(
        realm.types.error(
          "SyntaxError",
          `Cannot declare lexically scoped variable ${name} in global scope`,
        ),
      );
    }
  }

  for (const name of varNames) {
    const hasBinding = yield* hasLexicalDeclaration(name, env);
    if (hasBinding) {
      throw new ThrowCompletion(
        realm.types.error("SyntaxError", `${name} has already been declared`),
      );
    }
  }

  const varDeclarations = varScopedDeclarations(node);
  const functionsToInitialize = [];
  const declaredFunctionNames = new Set<string>();
  for (const d of varDeclarations.reverse()) {
    if (d.type !== "FunctionDeclaration") {
      continue;
    }

    const fnName = boundNames.soleElementOf(d);
    if (declaredFunctionNames.has(fnName)) {
      continue;
    }
    const isDefinable = yield* canDeclareGlobalFunction(fnName, env);
    if (!isDefinable) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          `Cannot declare global function ${fnName}`,
        ),
      );
    }

    declaredFunctionNames.add(fnName);
    functionsToInitialize.unshift(d);
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

      const definable = yield* canDeclareGlobalVar(vn, env);
      if (!definable) {
        throw new ThrowCompletion(
          realm.types.error(
            "TypeError",
            `Cannot declare global variable ${vn}`,
          ),
        );
      }

      declaredVarNames.add(vn);
    }
  }

  if (!strict) {
    // Annex B.3.3.3 Global var instantiation for web compatibility
    const declaredFunctionOrVarNames = new Set<string>([
      ...declaredFunctionNames,
      ...declaredVarNames,
    ]);
    const declarations = collectAnnexBFunctionDeclarations(node);
    for (const f of declarations) {
      if (!f.id || f.id.type !== "Identifier") {
        continue;
      }

      const F = f.id.name;
      // TODO: There's some notes about "if replacing the FunctionDeclaration with a VariableStatement ... would not produce any EarlyErrors for script"
      // What does that mean?  How can we tell?
      const hasDeclaration = yield* hasLexicalDeclaration(F, env);
      if (hasDeclaration) {
        continue;
      }

      const fnDefinable = yield* canDeclareGlobalFunction(F, env);
      if (!fnDefinable) {
        continue;
      }

      if (!declaredFunctionOrVarNames.has(F)) {
        yield* createGlobalVarBinding(F, false, env, realm);
        declaredFunctionOrVarNames.add(F);
      }

      f.extra = { ...f.extra, annexBHoisted: F };
    }
  }

  const lexDeclarations = lexicallyScopedDeclarations(node);
  for (const d of lexDeclarations) {
    for (const dn of boundNames(d)) {
      if (isVariableDeclaration(d) && d.kind === "const") {
        yield* env.createImmutableBindingEvaluator(dn, false);
      } else {
        yield* env.createMutableBindingEvaluator(dn, false);
      }
    }
  }

  for (const f of functionsToInitialize) {
    const fnName = boundNames.soleElementOf(f);
    const fn = createFunction(fnName, f, context);
    yield* createGlobalFunctionBinding(fnName, fn, false, env, realm);
  }

  for (const vn of declaredVarNames) {
    yield* createGlobalVarBinding(vn, false, env, realm);
  }
}
