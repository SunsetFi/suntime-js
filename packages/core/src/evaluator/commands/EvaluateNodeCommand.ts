import type { Node } from "@babel/types";

import evaluateNode from "../node-evaluators/evaluate-node.js";

import type { Completion } from "../completions/Completion.js";
import captureThrownCompletion from "../completions/capture-thrown-completion.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EnterNodeCommand } from "./EnterNodeCommand.js";
import { ExitNodeCommand } from "./ExitNodeCommand.js";
import EvaluationContext from "../EvaluationContext.js";

export function* EvaluateNodeCommand(
  node: Node,
  context: EvaluationContext,
): EvaluationGenerator<Completion> {
  // At one point, our commands were evaluated by a handler at the root of the evaluation chain,
  // and our result would come out of this yield statement.
  // However, that made it hard to implement async functions, as we would need to teach that system
  // how to handle an async yield.
  // Instead, this acts more as an advisory and "ask permission to continue" step.

  yield* EnterNodeCommand(node);

  return yield* context.run(function* () {
    try {
      return yield* captureThrownCompletion(evaluateNode(node));
    } finally {
      yield* ExitNodeCommand();
    }
  });
}
