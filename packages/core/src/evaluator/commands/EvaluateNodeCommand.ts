import type { Node } from "@babel/types";

import { Completion } from "../completions/Completion.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import evaluateNode from "../node-evaluators/evaluate-node.js";

import { NodeEnterCommand } from "./NodeEnterCommand.js";
import { NodeExitCommand } from "./NodeExitCommand.js";

export function* EvaluateNodeCommand(node: Node): EvaluationGenerator<Completion> {
  // At one point, our commands were evaluated by a handler at the root of the evaluation chain,
  // and our result would come out of this yield statement.
  // However, that made it hard to implement async functions, as we would need to teach that system
  // how to handle an async yield.
  // Instead, this acts more as an advisory and "ask permission to continue" step.

  try {
    // This may throw if the task wants to inject an abrupt completion, eg with task.throw().
    yield* NodeEnterCommand(node);

    // Note: Does not throw abrupt completions.  Returns them.
    return yield* evaluateNode(node);
  } catch (e) {
    if (Completion.Abrupt.is(e)) {
      return e;
    }

    throw e;
  } finally {
    yield* NodeExitCommand();
  }
}
