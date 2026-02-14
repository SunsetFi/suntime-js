import type { ExportAllDeclaration } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

function* exportAllDeclarationNodeEvaluator(
  _node: ExportAllDeclaration,
  _context: EvaluationContext,
): EvaluationGenerator {
  return null;
}

export default exportAllDeclarationNodeEvaluator;
