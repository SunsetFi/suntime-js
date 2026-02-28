import type { Node } from "@babel/types";

import type { EvaluationGenerator } from "./EvaluationGenerator.js";

export interface EvaluateCommandsOptions {
  onBeforeNode?(node: Node): void;
  onAfterNode?(node: Node): void;
}
export function* evaluateCommands<TReturn>(
  generator: EvaluationGenerator<TReturn>,
  { onBeforeNode, onAfterNode }: EvaluateCommandsOptions = {},
): Generator<void, TReturn, void> {
  // At one point in time, all evaluators yielded 'evaluation requests', which we handled here in a stack.
  // However, we need to allow evaluators to suspend execution on their own, for async and generator functions.
  // Rather than creating a convoluted process where this function has to deal with it, I just changed
  // the evaluate-node yield to be purely advisory, and not take any return value.

  let currentNode: Node | null = null;

  while (true) {
    // We accept that calling the generator immediately without waiting for a yield will
    // start executing code, but the proper use should be that we start with a
    // NodeEvaluationCommand, which will first yield a value of kind "evaluate-node".
    // It will then pause until the next run.
    // This effectively sets up the proper line and column that will be executed
    // when yield is called.
    // FIXME: Is this true?  Usage has to call .next() on the iterator once to get the line/column set up...
    const { value, done } = generator.next(null);

    // The above generator invocation will have invoked the node we were queued on.
    if (currentNode) {
      if (onAfterNode) {
        onAfterNode(currentNode);
      }
      currentNode = null;
    }

    if (done) {
      return value;
    }

    // We are queuing up a node to evaluate.
    if (value.command === "evaluate-node") {
      currentNode = value.node;
      if (onBeforeNode) {
        onBeforeNode(currentNode);
      }
    }

    // Wait for our runner to give us permission to continue.
    yield;
  }
}
