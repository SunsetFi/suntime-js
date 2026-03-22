import type { NewExpression } from "@babel/types";

import { isStaticJsFunction } from "../../runtime/types/StaticJsFunction.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

import { Completion } from "../completions/Completion.js";

import EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* newExpressionNodeEvaluator(node: NewExpression): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  const callee = yield* Q.val(EvaluateNodeCommand(node.callee));
  if (!isStaticJsFunction(callee)) {
    throw Completion.Throw(realm.types.error("TypeError", "Not a function"));
  }

  const args: StaticJsValue[] = [];
  for (let i = 0; i < node.arguments.length; i++) {
    const arg = yield* Q.val(EvaluateNodeCommand(node.arguments[i]));
    args[i] = arg;
  }

  return yield* callee.constructEvaluator(args);
}
