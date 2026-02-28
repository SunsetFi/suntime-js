import type { Node } from "@babel/types";

import type { EvaluateNodeOptions } from "../node-evaluators/evaluate-node.js";
import evaluateNode from "../node-evaluators/evaluate-node.js";

import type { Completion } from "../completions/Completion.js";
import captureThrownCompletion from "../completions/capture-thrown-completion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface EvaluateNodeCommand extends EvaluatorCommandBase {
  command: "evaluate-node";
  node: Node;
  context: EvaluationContext;
  options?: EvaluateNodeOptions;
}

export function* EvaluateNodeCommand(
  node: Node,
  context: EvaluationContext,
  evaluateOptions: EvaluateNodeOptions = {},
): EvaluationGenerator<Completion> {
  // At one point, our commands were evaluated by a handler at the root of the evaluation chain,
  // and our result would come out of this yield statement.
  // However, that made it hard to implement async functions, as we would need to teach that system
  // how to handle an async yield.
  // Instead, this acts more as an advisory and "ask permission to continue" step.
  yield {
    command: "evaluate-node",
    node,
    context,
    options: evaluateOptions,
  };

  return yield* captureThrownCompletion(
    evaluateNode(node, context, evaluateOptions),
  );
}
