import type { ClassExpression } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* classExpressionNodeEvaluator(
  _node: ClassExpression,
  _context: EvaluationContext,
): EvaluationGenerator {
  throw new StaticJsEngineError("Class expressions are not supported.");
}
