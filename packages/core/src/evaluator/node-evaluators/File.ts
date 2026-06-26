import type { File } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";

function* fileNodeEvaluator(node: File): EvaluationGenerator {
  return yield* Q(EvaluateNodeCommand(node.program));
}

export default fileNodeEvaluator;
