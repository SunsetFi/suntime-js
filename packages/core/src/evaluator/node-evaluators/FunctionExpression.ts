import type { FunctionExpression } from "@babel/types";

import { instantiateFunctionExpression } from "../../algorithms/instantiate-function-expression.js";
import { StaticJsDeclarativeEnvironmentRecord } from "../../environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import type { StaticJsFunction } from "../../types/StaticJsFunction.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { getNamedEvaluationParameter } from "./NamedEvaluation.js";

function* functionExpressionNodeEvaluator(node: FunctionExpression): EvaluationGenerator {
  const context = EvaluationContext.current;
  const expressionFunctionName = node.id?.name ?? null;
  const functionName = expressionFunctionName ?? getNamedEvaluationParameter() ?? "";

  let func: StaticJsFunction;
  // This binding is normally done inside Instantiate*FunctionExpression
  if (expressionFunctionName) {
    const funcEnv = StaticJsDeclarativeEnvironmentRecord.from(context);
    yield* funcEnv.createImmutableBindingEvaluator(expressionFunctionName, false);
    // HACK: This is supposed to be done inside the Instantiate*FunctionExpression stuff
    const ctx = EvaluationContext.current;
    let oldEnv = ctx.lexicalEnv;
    ctx.lexicalEnv = funcEnv;
    try {
      func = yield* instantiateFunctionExpression(node, functionName);
    } finally {
      ctx.lexicalEnv = oldEnv;
    }
    yield* funcEnv.initializeBindingEvaluator(expressionFunctionName, func);
  } else {
    func = yield* instantiateFunctionExpression(node, functionName);
  }

  return func;
}

export default functionExpressionNodeEvaluator;
