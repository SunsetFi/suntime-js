import { type YieldExpression } from "@babel/types";

import { YieldCommand } from "../commands/YieldCommand.js";

import EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import Q from "../completions/Q.js";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

export default function* yieldExpressionNodeEvaluator(node: YieldExpression): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  if (!node.argument) {
    return yield* YieldCommand(realm.types.undefined);
  }

  if (node.delegate) {
    throw new StaticJsEngineError("Delegating yield expressions are not supported.");
  }

  const value = yield* Q.val(EvaluateNodeCommand(node.argument));

  return yield* YieldCommand(value);
}
