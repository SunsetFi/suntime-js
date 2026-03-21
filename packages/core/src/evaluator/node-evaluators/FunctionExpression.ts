import type { FunctionExpression } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import createFunction from "./Function.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

function* expressionStatementNodeEvaluator(
  node: FunctionExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const expressionFunctionName = node.id?.name ?? null;
  const functionName =
    expressionFunctionName ?? context.parameter("NamedEvaluation::name", String) ?? "";

  if (expressionFunctionName) {
    const funcEnv = StaticJsDeclarativeEnvironmentRecord.from(context);
    yield* funcEnv.createImmutableBindingEvaluator(expressionFunctionName, false);

    const functionContext = context.withLexicalEnvironmentContext(funcEnv);
    const func = createFunction(functionName, node, functionContext);

    yield* funcEnv.initializeBindingEvaluator(expressionFunctionName, func);

    return func;
  } else {
    return createFunction(functionName, node, context);
  }
}

export default expressionStatementNodeEvaluator;
