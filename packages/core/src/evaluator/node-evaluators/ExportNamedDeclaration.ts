import { ExportNamedDeclaration } from "@babel/types";

import { NormalCompletion } from "../completions/index.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

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
