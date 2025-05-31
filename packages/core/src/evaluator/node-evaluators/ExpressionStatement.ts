import { ExpressionStatement } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

export default function* expressionStatementNodeEvaluator(
  node: ExpressionStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const result = yield* EvaluateNodeCommand(node.expression, context);

  if (result.type !== "throw" && result.type !== "normal") {
    throw new StaticJsEngineError(
      `Expected node type ${node.type} to return a NormalCompletion or ThrowCompletion, but got ${result.type}.`,
    );
  }

  return result;
}
