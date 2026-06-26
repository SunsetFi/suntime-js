import type { Node } from "@babel/types";

import { StaticJsRuntimeError } from "#errors/StaticJsRuntimeError.js";
import type { StaticJsFunction } from "#types/StaticJsFunction.js";

import type { EvaluatorCommand } from "./commands/EvaluatorCommand.js";
import type EvaluatorCommandBase from "./commands/EvaluatorCommandBase.js";
import { Completion } from "./completions/Completion.js";
import type { EvaluationGenerator } from "./EvaluationGenerator.js";

export interface EvaluateCommandsOptions {
  onBeforeNode?(node: Node): void;
  onAfterNode?(node: Node): void;
  onNodeEnter?(node: Node): void;
  onNodeExit?(): void;
  onFunctionEnter?(func: StaticJsFunction): void;
  onFunctionExit?(): void;
}
export function* evaluateCommands<TReturn>(
  generator: EvaluationGenerator<TReturn>,
  {
    onBeforeNode,
    onAfterNode,
    onNodeEnter,
    onNodeExit,
    onFunctionEnter,
    onFunctionExit,
  }: EvaluateCommandsOptions = {},
): Generator<void, TReturn, void> {
  // At one point in time, all evaluators yielded 'evaluation requests', which we handled here in a stack.
  // However, we need to allow evaluators to suspend execution on their own, for async and generator functions.
  // Rather than creating a convoluted process where this function has to deal with it, I just changed
  // the evaluate-node yield to be purely advisory, and not take any return value.

  let currentNode: Node | null = null;

  let insertCompletion: Completion.Abrupt | null = null;

  function* awaitTaskContinue() {
    try {
      // Yield so the running task can interrogate and choose to continue the task.
      yield;
    } catch (err) {
      if (err instanceof StaticJsRuntimeError) {
        // Inject the error as a completion into the current evaluator.
        insertCompletion = Completion.Throw(err.thrown);
      } else {
        // If it's not an expected error, rethrow it to be handled by the task runner.
        throw err;
      }
    }
  }

  while (true) {
    let result: IteratorResult<EvaluatorCommandBase, TReturn>;
    if (insertCompletion) {
      // Note: This only works because our old system was designed around throwing abrupt completions.
      // In practice, we want to transition to use .next() here, as EvaluateNodeCommand wants to return completions, not have them thrown.
      const toThrow = insertCompletion;
      insertCompletion = null;
      result = generator.throw(toThrow);
    } else {
      result = generator.next();
    }

    // EvaluationGenerator yields the opaque `EvaluatorCommandBase` publicly;
    // internally we narrow to the concrete `EvaluatorCommand` union to
    // discriminate on `command` and read each command's payload.
    const { value, done } = result as IteratorResult<EvaluatorCommand, TReturn>;

    // The above generator invocation will have invoked the node we were queued on.
    if (currentNode) {
      onAfterNode?.(currentNode);
      currentNode = null;
    }

    if (done) {
      return value;
    }

    switch (value.command) {
      case "enter-node": {
        // We are queuing up a node to evaluate.
        currentNode = value.node;
        onBeforeNode?.(currentNode);
        onNodeEnter?.(currentNode!);

        // Yield so the runner can interrogate and decide to evaluate the node.
        yield* awaitTaskContinue();

        break;
      }
      case "exit-node": {
        onNodeExit?.();
        // Purely advisory, continue to find the next evaluation node.
        break;
      }
      case "function-enter": {
        onFunctionEnter?.(value.func);
        // Purely advisory, continue to find the next evaluation node.
        break;
      }
      case "function-exit": {
        onFunctionExit?.();
        // Purely advisory, continue to find the next evaluation node.
        break;
      }
    }
  }
}
