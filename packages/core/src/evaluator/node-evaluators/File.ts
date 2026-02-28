import type { File } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

function* fileNodeEvaluator(node: File, context: EvaluationContext): EvaluationGenerator {
  return yield* Q(EvaluateNodeCommand(node.program, context));
}

export default fileNodeEvaluator;
