import type { File } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

function* fileNodeEvaluator(node: File): EvaluationGenerator {
  return yield* Q(EvaluateNodeCommand(node.program));
}

export default fileNodeEvaluator;
