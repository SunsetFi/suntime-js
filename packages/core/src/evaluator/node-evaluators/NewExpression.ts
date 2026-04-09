import type { NewExpression } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { isCallable } from "../../runtime/algorithms/is-callable.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";

import { Completion } from "../completions/Completion.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* newExpressionNodeEvaluator(node: NewExpression): EvaluationGenerator {
  const callee = yield* Q.val(EvaluateNodeCommand(node.callee));
  if (!isCallable(callee)) {
    throw Completion.Throw("TypeError", "Not a function");
  }

  const args: StaticJsValue[] = [];
  for (let i = 0; i < node.arguments.length; i++) {
    const arg = yield* Q.val(EvaluateNodeCommand(node.arguments[i]));
    args[i] = arg;
  }

  return yield* callee.constructEvaluator(args);
}
