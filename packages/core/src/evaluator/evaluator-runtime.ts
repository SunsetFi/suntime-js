import type { Node } from "@babel/types";

import type EvaluationGenerator from "./EvaluationGenerator.js";

export interface EvaluateCommandsOptions {
  onBeforeNodeEntry?(node: Node): void;
}
export function* evaluateCommands<TReturn>(
  generator: EvaluationGenerator<TReturn>,
  { onBeforeNodeEntry }: EvaluateCommandsOptions = {},
): Generator<void, TReturn, void> {
  // At one point in time, all evaluators yielded 'evaluation requests', which we handled here in a stack.
  // However, we need to allow evaluators to suspend execution on their own, for async and generator functions.
  // Rather than creating a convoluted process where this function has to deal with it, I just changed
  // the evaluate-node yield to be purely advisory, and not take any return value.

  while (true) {
    // We accept that calling the generator immediately without waiting for a yield will
    // start executing code, but the proper use should be that we start with a
    // NodeEvaluationCommand, which will first yield a value of kind "evalute-node".
    // It will then pause until the next run.
    // This effectively sets up the proper line and column that will be executed
    // when yield is called.
    const { value, done } = generator.next(null);

    if (!done && value.kind === "evalute-node" && onBeforeNodeEntry) {
      // We get this notification yielded before any node is actually evaluated.
      onBeforeNodeEntry(value.node);
    }

    // Wait for our runner to give us permission to continue.
    yield;

    // If this is waiting on a node, continuing will evaluate that node.

    if (done) {
      return value;
    }
  }
}
