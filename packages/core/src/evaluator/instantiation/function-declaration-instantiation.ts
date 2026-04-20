import { isIdentifier, type FunctionDeclaration, type Node } from "@babel/types";

import { instantiateFunctionObject } from "../../runtime/algorithms/instantiate-function-object.js";
import { StaticJsDeclarativeEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import { createListIteratorRecord } from "../../runtime/iterators/create-list-iterator-record.js";
import type {
  StaticJsAstFunction,
  StaticJsAstFunctionArgument,
} from "../../runtime/types/implementation/functions/StaticJsAstFunction.js";
import type { StaticJsObject } from "../../runtime/types/StaticJsObject.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import iteratorBindingInitialization from "../bindings/iterator-binding-initialization.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import boundNames from "./algorithms/bound-names.js";
import collectAnnexBFunctionDeclarations from "./algorithms/collect-annex-b-function-declarations.js";
import createMappedArgumentsObject from "./algorithms/create-mapped-arguments-object.js";
import createUnmappedArgumentsObject from "./algorithms/create-unmapped-arguments-object.js";
import lexicallyDeclaredNames from "./algorithms/lexically-declared-names.js";
import lexicallyScopedDeclarations from "./algorithms/lexically-scoped-declarations.js";
import varDeclaredNames from "./algorithms/var-declared-names.js";
import varScopedDeclarations from "./algorithms/var-scoped-declarations.js";

export default function* functionDeclarationInstantiation(
  func: StaticJsAstFunction,
  argumentsList: StaticJsValue[],
): EvaluationGenerator<void> {
  const calleeContext = EvaluationContext.current;
  const { realm } = EvaluationContext.current;

  const strict = func.strict;
  const formals = func.formalParameters;

  const parameterNames = formals.flatMap(boundNames);
  const hasDuplicates = parameterNames.length !== new Set(parameterNames).size;

  // TODO: arguments object
  const simpleParameterList = isSimpleParameterList(formals);
  const hasParameterExpressions = containsExpression(formals);

  // Weirdness because we have no "FunctionStatementList" node type and need
  // to request top level var names/declarations from the function body.
  const varNames = varDeclaredNames.topLevel(func.ecmaScriptCode);
  const varDeclarations = varScopedDeclarations.topLevel(func.ecmaScriptCode);
  const lexicalNames = lexicallyDeclaredNames.forScriptOrFunction(func.ecmaScriptCode);

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
    if (functionNames.includes("arguments") || lexicalNames.includes("arguments")) {
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
    let ao: StaticJsObject;
    if (strict || !simpleParameterList) {
      ao = yield* createUnmappedArgumentsObject(argumentsList);
    } else {
      ao = yield* createMappedArgumentsObject(func, formals, argumentsList, env);
    }

    if (strict) {
      yield* env.createImmutableBindingEvaluator("arguments", false);
    } else {
      yield* env.createMutableBindingEvaluator("arguments", false);
    }

    yield* env.initializeBindingEvaluator("arguments", ao);
    parameterBindings = [...parameterNames, "arguments"];
  } else {
    parameterBindings = parameterNames;
  }

  const iteratorRecord = yield* createListIteratorRecord(argumentsList);

  let usedEnv: StaticJsEnvironmentRecord | null;
  if (hasDuplicates) {
    usedEnv = null;
  } else {
    usedEnv = env;
  }

  yield* iteratorBindingInitialization(formals, iteratorRecord, usedEnv);

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
        initialValue = realm.types.undefined;
      } else {
        initialValue = yield* env.getBindingValueEvaluator(n, false);
      }

      yield* varEnv.initializeBindingEvaluator(n, initialValue);
    }
  }

  if (strict) {
    lexEnv = varEnv;
  } else {
    const annexBFunctions = collectAnnexBFunctionDeclarations(func.ecmaScriptCode);
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

  const lexDeclarations = lexicallyScopedDeclarations.forScriptOrFunction(func.ecmaScriptCode);
  for (const d of lexDeclarations) {
    for (const dn of boundNames(d)) {
      if (d.type == "VariableDeclaration" && d.kind === "const") {
        yield* lexEnv.createImmutableBindingEvaluator(dn, true);
      } else {
        yield* lexEnv.createMutableBindingEvaluator(dn, false);
      }
    }
  }

  for (const f of functionsToInitialize) {
    const fn = boundNames.soleElementOf(f);
    const fo = instantiateFunctionObject(f, calleeContext.lexicalEnv, calleeContext.privateEnv);
    yield* varEnv.setMutableBindingEvaluator(fn, fo, false);
  }
}

function isSimpleParameterList(formals: StaticJsAstFunctionArgument[]): boolean {
  if (formals.length === 0) {
    return true;
  }

  return formals.every((formal) => isIdentifier(formal));
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
    return node.elements.some((element) => element !== null && containsExpression(element));
  }

  if (node.type === "ObjectPattern") {
    return node.properties.some(containsExpression);
  }

  if (node.type === "ObjectProperty") {
    return containsExpression(node.value);
  }

  return false;
}
