import type { ClassDeclaration } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* classDeclarationNodeEvaluator(
  _node: ClassDeclaration,
  _context: EvaluationContext,
): EvaluationGenerator {
  throw new StaticJsEngineError("Class declarations are not supported.");
}
