import { type YieldExpression } from "@babel/types";

import { YieldCommand } from "../commands/YieldCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import Q from "../completions/Q.js";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

export default function* yieldExpressionNodeEvaluator(
  node: YieldExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  if (!node.argument) {
    return yield* YieldCommand(context.realm.types.undefined);
  }

  if (node.delegate) {
    throw new StaticJsEngineError("Delegating yield expressions are not supported.");
  }

  const value = yield* Q.val(EvaluateNodeCommand(node.argument, context), context.realm);

  return yield* YieldCommand(value);
}
