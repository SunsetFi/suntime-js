import type { ThrowStatement } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";
import { Q } from "../completions/Q.js";

export default function* throwStatementNodeEvaluator(node: ThrowStatement): EvaluationGenerator {
  const value = yield* Q.val(EvaluateNodeCommand(node.argument));
  throw Completion.Throw(value);
}
