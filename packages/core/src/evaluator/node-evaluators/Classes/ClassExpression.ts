import type { ClassExpression } from "@babel/types";

import { classDefinitionEvaluation } from "./evaluation/class-definition-evaluation.js";
import { EvaluationGenerator } from "../../EvaluationGenerator.js";

export default function* classExpressionNodeEvaluator(node: ClassExpression): EvaluationGenerator {
  const className = node.id ? node.id.name : null;
  const classKey = className ?? "";
  return yield* classDefinitionEvaluation(node, className, classKey);
}
