import type { FunctionExpression } from "@babel/types";

import { StaticJsDeclarativeEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import createFunction from "./Function.js";
import { getNamedEvaluationParameter } from "./NamedEvaluation.js";

function* expressionStatementNodeEvaluator(node: FunctionExpression): EvaluationGenerator {
  const context = EvaluationContext.current;
  const expressionFunctionName = node.id?.name ?? null;
  const functionName = expressionFunctionName ?? getNamedEvaluationParameter() ?? "";

  if (expressionFunctionName) {
    const funcEnv = StaticJsDeclarativeEnvironmentRecord.from(context);
    yield* funcEnv.createImmutableBindingEvaluator(expressionFunctionName, false);

    const func = createFunction(functionName, node, funcEnv);

    yield* funcEnv.initializeBindingEvaluator(expressionFunctionName, func);

    return func;
  } else {
    return createFunction(functionName, node, context.lexicalEnv);
  }
}

export default expressionStatementNodeEvaluator;
