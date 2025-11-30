import { type Node, isVariableDeclaration } from "@babel/types";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";
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
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const lexNames = lexicallyDeclaredNames(node);
  const varNames = varDeclaredNames(node);

  for (const name of lexNames) {
    const hasBinding = yield* hasLexicalDeclaration(name, context);
    if (hasBinding) {
      throw new ThrowCompletion(
        context.realm.types.error(
          "SyntaxError",
          `${name} has already been declared`,
        ),
      );
    }

    const restricted = yield* hasRestrictedGlobalProperty(name, context);
    if (restricted) {
      throw new ThrowCompletion(
        context.realm.types.error(
          "SyntaxError",
          `Cannot declare lexically scoped variable ${name} in global scope`,
        ),
      );
    }
  }

  for (const name of varNames) {
    const hasBinding = yield* hasLexicalDeclaration(name, context);
    if (hasBinding) {
      throw new ThrowCompletion(
        context.realm.types.error(
          "SyntaxError",
          `${name} has already been declared`,
        ),
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
    const isDefinable = yield* canDeclareGlobalFunction(fnName, context);
    if (!isDefinable) {
      throw new ThrowCompletion(
        context.realm.types.error(
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

      const definable = yield* canDeclareGlobalVar(vn, context);
      if (!definable) {
        throw new ThrowCompletion(
          context.realm.types.error(
            "TypeError",
            `Cannot declare global variable ${vn}`,
          ),
        );
      }

      declaredVarNames.add(vn);
    }
  }

  if (!context.strict) {
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
      const hasDeclaration = context.lexicalEnv.hasBindingEvaluator(F);
      if (hasDeclaration) {
        continue;
      }

      const fnDefinable = yield* canDeclareGlobalFunction(F, context);
      if (!fnDefinable) {
        continue;
      }

      if (declaredFunctionOrVarNames.has(F)) {
        continue;
      }

      yield* createGlobalVarBinding(F, false, context);
      declaredFunctionOrVarNames.add(F);

      f.extra = { ...f.extra, annexBHoisted: F };
    }
  }

  const lexDeclarations = lexicallyScopedDeclarations(node);
  for (const d of lexDeclarations) {
    for (const dn of boundNames(d)) {
      if (isVariableDeclaration(d) && d.kind === "const") {
        yield* context.lexicalEnv.createImmutableBindingEvaluator(dn, false);
      } else {
        yield* context.lexicalEnv.createMutableBindingEvaluator(dn, false);
      }
    }
  }

  for (const f of functionsToInitialize) {
    const fnName = boundNames.soleElementOf(f);
    const fn = createFunction(fnName, f, context);
    yield* createGlobalFunctionBinding(fnName, fn, false, context);
  }

  for (const vn of declaredVarNames) {
    yield* createGlobalVarBinding(vn, false, context);
  }
}
