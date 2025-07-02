import type { Node } from "@babel/types";

import type EvaluationGenerator from "./EvaluationGenerator.js";

export interface EvaluateCommandsOptions {
  onBeforeNodeEntry?(node: Node): void;
}
export function* evaluateCommands<TReturn>(
  generator: EvaluationGenerator<TReturn>,
  { onBeforeNodeEntry }: EvaluateCommandsOptions = {},
): Generator<void, TReturn, void> {
  while (true) {
    // We accept that calling the generator immediately without waiting for a yield will
    // start executing code, but the proper use should be that we start with a
    // NodeEvaluationCommand, which will first yield a value of kind "evalute-node".
    // It will then pause until the next run.
    // This effectively sets up the proper line and column that will be executed
    // when yield is called.
    const { value, done } = generator.next(null);

    if (!done && value.kind === "evalute-node" && onBeforeNodeEntry) {
      onBeforeNodeEntry(value.node);
    }

    // Wait for our runner to give us permission to continue.
    yield;

    if (done) {
      return value;
    }
  }
}
