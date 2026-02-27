import type { FunctionExpression } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import createFunction from "./Function.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

function* expressionStatementNodeEvaluator(
  node: FunctionExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  const functionName = node.id?.name ?? null;

  if (functionName) {
    const funcEnv = StaticJsDeclarativeEnvironmentRecord.from(context);
    yield* funcEnv.createImmutableBindingEvaluator(functionName, false);
    const functionContext = context.createLexicalEnvContext(funcEnv);
    const func = createFunction(functionName, node, functionContext);
    yield* funcEnv.initializeBindingEvaluator(functionName, func);
    return func;
  } else {
    return createFunction(null, node, context);
  }
}

export default expressionStatementNodeEvaluator;
