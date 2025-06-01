import { ExportAllDeclaration } from "@babel/types";

import { NormalCompletion } from "../completions/NormalCompletion.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";

function* exportAllDeclarationNodeEvaluator(
  _node: ExportAllDeclaration,
  _context: EvaluationContext,
): EvaluationGenerator {
  return NormalCompletion();
}

export default exportAllDeclarationNodeEvaluator;
