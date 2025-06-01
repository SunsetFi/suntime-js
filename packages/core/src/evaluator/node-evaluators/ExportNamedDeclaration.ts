import { ExportNamedDeclaration } from "@babel/types";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { NormalCompletion } from "../completions/NormalCompletion.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";

function* exportNamedDeclarationNodeEvaluator(
  node: ExportNamedDeclaration,
  context: EvaluationContext,
): EvaluationGenerator {
  if (node.declaration) {
    return yield* EvaluateNodeCommand(node.declaration, context);
  }
  return NormalCompletion();
}

export default exportNamedDeclarationNodeEvaluator;
