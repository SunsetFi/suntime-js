import type { FunctionExpression } from "@babel/types";

import { instantiateFunctionObject } from "../../runtime/algorithms/instantiate-function-object.js";
import { setFunctionName } from "../../runtime/algorithms/set-function-name.js";
import { StaticJsDeclarativeEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { getNamedEvaluationParameter } from "./NamedEvaluation.js";

function* functionExpressionNodeEvaluator(node: FunctionExpression): EvaluationGenerator {
  const context = EvaluationContext.current;
  const expressionFunctionName = node.id?.name ?? null;
  const functionName = expressionFunctionName ?? getNamedEvaluationParameter() ?? "";

  let func: StaticJsFunction;
  if (expressionFunctionName) {
    const funcEnv = StaticJsDeclarativeEnvironmentRecord.from(context);
    yield* funcEnv.createImmutableBindingEvaluator(expressionFunctionName, false);

    func = yield* instantiateFunctionObject(node, funcEnv, context.privateEnv);

    yield* funcEnv.initializeBindingEvaluator(expressionFunctionName, func);
  } else {
    func = yield* instantiateFunctionObject(node, context.lexicalEnv, context.privateEnv);
  }

  yield* setFunctionName(func, functionName);

  return func;
}

export default functionExpressionNodeEvaluator;
