import type { ExportNamedDeclaration } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import Q from "../completions/Q.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

function* exportNamedDeclarationNodeEvaluator(
  node: ExportNamedDeclaration,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.declaration) {
    return yield* Q(EvaluateNodeCommand(node.declaration, context));
  }
  return null;
}

export default exportNamedDeclarationNodeEvaluator;
