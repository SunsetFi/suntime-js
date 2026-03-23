import type { ThrowStatement } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";

import { Completion } from "../completions/Completion.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* throwStatementNodeEvaluator(node: ThrowStatement): EvaluationGenerator {
  const value = yield* Q.val(EvaluateNodeCommand(node.argument));
  throw Completion.Throw(value);
}
