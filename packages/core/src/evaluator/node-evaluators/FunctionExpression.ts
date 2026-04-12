import type { FunctionExpression } from "@babel/types";

import { StaticJsDeclarativeEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { createFunction } from "./Function.js";
import { getNamedEvaluationParameter } from "./NamedEvaluation.js";
import { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";
import { setFunctionName } from "../../runtime/algorithms/set-function-name.js";

function* functionExpressionNodeEvaluator(node: FunctionExpression): EvaluationGenerator {
  const context = EvaluationContext.current;
  const expressionFunctionName = node.id?.name ?? null;
  const functionName = expressionFunctionName ?? getNamedEvaluationParameter() ?? "";

  let func: StaticJsFunction;
  if (expressionFunctionName) {
    const funcEnv = StaticJsDeclarativeEnvironmentRecord.from(context);
    yield* funcEnv.createImmutableBindingEvaluator(expressionFunctionName, false);

    func = createFunction(node, funcEnv);

    yield* funcEnv.initializeBindingEvaluator(expressionFunctionName, func);
  } else {
    func = createFunction(node, context.lexicalEnv);
  }

  yield* setFunctionName(func, functionName);

  return func;
}

export default functionExpressionNodeEvaluator;
