import type { NewExpression } from "@babel/types";

import { construct } from "../../runtime/algorithms/construct.js";
import { isCallable } from "../../runtime/algorithms/is-callable.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";
import { Q } from "../completions/Q.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* newExpressionNodeEvaluator(node: NewExpression): EvaluationGenerator {
  const callee = yield* Q.val(EvaluateNodeCommand(node.callee));
  if (!isCallable(callee)) {
    throw Completion.Throw("TypeError", "Cannot call new on a non-function");
  }

  const args: StaticJsValue[] = [];
  for (let i = 0; i < node.arguments.length; i++) {
    const arg = yield* Q.val(EvaluateNodeCommand(node.arguments[i]));
    args[i] = arg;
  }

  return yield* construct(callee, args);
}
