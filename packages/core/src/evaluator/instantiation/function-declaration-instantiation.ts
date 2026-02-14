import type { FunctionDeclaration, Node } from "@babel/types";

import type StaticJsAstFunction from "../../runtime/types/implementation/StaticJsAstFunction.js";
import type { StaticJsFunctionFactory } from "../../runtime/types/implementation/StaticJsFunctionFactory.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import createListIteratorRecord from "../../runtime/algorithms/create-list-iterator-record.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import iteratorBindingInitialization from "../bindings/iterator-binding-initialization.js";

import boundNames from "./algorithms/bound-names.js";
import varDeclaredNames from "./algorithms/var-declared-names.js";
import varScopedDeclarations from "./algorithms/var-scoped-declarations.js";
import lexicallyDeclaredNames from "./algorithms/lexically-declared-names.js";
import collectAnnexBFunctionDeclarations from "./algorithms/collect-annex-b-function-declarations.js";
import lexicallyScopedDeclarations from "./algorithms/lexically-scoped-declarations.js";

export default function* functionDeclarationInstantiation(
  func: StaticJsAstFunction,
  argumentsList: StaticJsValue[],
  calleeContext: EvaluationContext,
  // Gross circular dependency workaround.
  createFunction: StaticJsFunctionFactory,
): EvaluationGenerator<void> {
  // Note: The spec lets us arbitrarily mutate the calleeContext's envs, but our context system used to not work that way.
  // I added support for it, but this is still squiggy.

  const realm = calleeContext.realm;

  const strict = func.strict;
  const formals = func.formalParameters;

  const parameterNames = formals.flatMap(boundNames);
  const hasDuplicates = parameterNames.length !== new Set(parameterNames).size;

  // TODO: arguments object
  // const simpleParameterList = isSimpleParameterList(formals);
  const hasParameterExpressions = containsExpression(formals);

  // Weirdness because we have no "FunctionStatementList" node type and need
  // to request top level var names/declarations from the function body.
  const varNames = varDeclaredNames.topLevel(func.ECMAScriptCode);
  const varDeclarations = varScopedDeclarations.topLevel(func.ECMAScriptCode);
  const lexicalNames = lexicallyDeclaredNames.topLevel(func.ECMAScriptCode);

  const functionNames: string[] = [];
  const functionsToInitialize: FunctionDeclaration[] = [];

  for (const d of varDeclarations.reverse()) {
    if (d.type !== "FunctionDeclaration") {
      continue;
    }

    const fn = boundNames.soleElementOf(d);
    if (functionNames.includes(fn)) {
      continue;
    }

    functionNames.unshift(fn);
    functionsToInitialize.unshift(d);
  }

  let argumentsObjectNeeded = true;

  let env: StaticJsEnvironmentRecord;

  if (func.thisMode === "lexical") {
    argumentsObjectNeeded = false;
  } else if (parameterNames.includes("arguments")) {
    argumentsObjectNeeded = false;
  } else if (!hasParameterExpressions) {
    if (
      functionNames.includes("arguments") ||
      lexicalNames.includes("arguments")
    ) {
      argumentsObjectNeeded = false;
    }
  }

  if (strict || !hasParameterExpressions) {
    env = calleeContext.lexicalEnv;
  } else {
    const calleeEnv = calleeContext.lexicalEnv;
    env = new StaticJsDeclarativeEnvironmentRecord(calleeEnv, realm);
    calleeContext.lexicalEnv = env;
  }

  let parameterBindings: string[];

  for (const paramName of parameterNames) {
    const alreadyDeclared = yield* env.hasBindingEvaluator(paramName);
    if (alreadyDeclared) {
      continue;
    }

    yield* env.createMutableBindingEvaluator(paramName, false);
    if (hasDuplicates) {
      yield* env.initializeBindingEvaluator(paramName, realm.types.undefined);
    }
  }

  if (argumentsObjectNeeded) {
    // TODO: 22 - Create the arguments object and bind it to "arguments"
    parameterBindings = parameterNames;
  } else {
    parameterBindings = parameterNames;
  }

  const iteratorRecord = yield* createListIteratorRecord(argumentsList, realm);

  let usedEnv: StaticJsEnvironmentRecord | null;
  if (hasDuplicates) {
    usedEnv = null;
  } else {
    usedEnv = env;
  }

  yield* iteratorBindingInitialization(
    formals,
    iteratorRecord,
    usedEnv,
    calleeContext,
  );

  let varEnv: StaticJsEnvironmentRecord;
  let lexEnv: StaticJsEnvironmentRecord;

  let instantiatedVarNames: string[];
  if (!hasParameterExpressions) {
    instantiatedVarNames = [...parameterBindings];
    for (const n of varNames) {
      if (instantiatedVarNames.includes(n)) {
        continue;
      }

      instantiatedVarNames.push(n);
      yield* env.createMutableBindingEvaluator(n, false);
      yield* env.initializeBindingEvaluator(n, realm.types.undefined);
    }

    varEnv = env;
  } else {
    varEnv = new StaticJsDeclarativeEnvironmentRecord(env, realm);
    calleeContext.variableEnv = varEnv;
    instantiatedVarNames = [];
    for (const n of varNames) {
      if (instantiatedVarNames.includes(n)) {
        continue;
      }

      instantiatedVarNames.push(n);
      yield* varEnv.createMutableBindingEvaluator(n, false);
      let initialValue: StaticJsValue;
      if (!parameterBindings.includes(n) || functionNames.includes(n)) {
        initialValue = calleeContext.realm.types.undefined;
      } else {
        initialValue = yield* env.getBindingValueEvaluator(n, false);
      }

      yield* varEnv.initializeBindingEvaluator(n, initialValue);
    }
  }

  if (strict) {
    lexEnv = varEnv;
  } else {
    const annexBFunctions = collectAnnexBFunctionDeclarations(
      func.ECMAScriptCode,
    );
    for (const f of annexBFunctions) {
      if (f.id?.type !== "Identifier") {
        continue;
      }

      const F = f.id.name;

      // TODO: Early errors stuff

      if (!instantiatedVarNames.includes(F) && F !== "arguments") {
        yield* varEnv.createMutableBindingEvaluator(F, false);
        yield* varEnv.initializeBindingEvaluator(F, realm.types.undefined);
        instantiatedVarNames.push(F);
      }

      f.extra = { ...f.extra, annexBHoisted: F };
    }
    lexEnv = new StaticJsDeclarativeEnvironmentRecord(varEnv, realm);
  }

  calleeContext.lexicalEnv = lexEnv;

  const lexDeclarations = lexicallyScopedDeclarations.topLevel(
    func.ECMAScriptCode,
  );
  for (const d of lexDeclarations) {
    for (const dn of boundNames(d)) {
      if (d.type == "VariableDeclaration" && d.kind === "const") {
        yield* lexEnv.createImmutableBindingEvaluator(dn, true);
      } else {
        yield* lexEnv.createMutableBindingEvaluator(dn, false);
      }
    }
  }

  // TODO: Private env

  for (const f of functionsToInitialize) {
    const fn = boundNames.soleElementOf(f);
    const fo = createFunction(fn, f, calleeContext);
    yield* varEnv.setMutableBindingEvaluator(fn, fo, false);
  }
}

function containsExpression(node: Node | Node[]): boolean {
  if (Array.isArray(node)) {
    return node.some(containsExpression);
  }

  if (node.type === "AssignmentPattern") {
    return true;
  }

  if (node.type === "RestElement") {
    return containsExpression(node.argument);
  }

  if (node.type === "ArrayPattern") {
    return node.elements.some(
      (element) => element !== null && containsExpression(element),
    );
  }

  if (node.type === "ObjectPattern") {
    return node.properties.some(containsExpression);
  }

  if (node.type === "ObjectProperty") {
    return containsExpression(node.value);
  }

  return false;
}
