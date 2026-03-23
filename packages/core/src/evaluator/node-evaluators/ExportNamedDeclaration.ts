import type { ExportNamedDeclaration } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

function* exportNamedDeclarationNodeEvaluator(node: ExportNamedDeclaration): EvaluationGenerator {
  if (node.declaration) {
    return yield* Q(EvaluateNodeCommand(node.declaration));
  }
  return null;
}

export default exportNamedDeclarationNodeEvaluator;
