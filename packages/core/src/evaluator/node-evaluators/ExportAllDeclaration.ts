import type { ExportAllDeclaration } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

function* exportAllDeclarationNodeEvaluator(_node: ExportAllDeclaration): EvaluationGenerator {
  return null;
}

export default exportAllDeclarationNodeEvaluator;
