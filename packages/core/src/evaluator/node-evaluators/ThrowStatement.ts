import type { ThrowStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

import { Completion } from "../completions/Completion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* throwStatementNodeEvaluator(
  node: ThrowStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const value = yield* Q.val(
    EvaluateNodeCommand(node.argument, context),
    context.realm,
  );
  throw Completion.Throw(value);
}
