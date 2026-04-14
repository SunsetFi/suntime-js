import type { ClassExpression } from "@babel/types";

import { classDefinitionEvaluation } from "./evaluation/class-definition-evaluation.js";
import { EvaluationGenerator } from "../../EvaluationGenerator.js";
import { Q } from "../../completions/Q.js";

export default function* classExpressionNodeEvaluator(node: ClassExpression): EvaluationGenerator {
  const className = node.id ? node.id.name : null;
  const classKey = className ?? "";
  return yield* Q(classDefinitionEvaluation(node, className, classKey));
}
