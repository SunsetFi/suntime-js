import type { ClassExpression } from "@babel/types";

import { EvaluationGenerator } from "../../EvaluationGenerator.js";
import { Q } from "../../completions/Q.js";

import { getNamedEvaluationParameter } from "../NamedEvaluation.js";

import { classDefinitionEvaluation } from "./evaluation/class-definition-evaluation.js";

export default function* classExpressionNodeEvaluator(node: ClassExpression): EvaluationGenerator {
  const className = node.id ? node.id.name : null;
  const classKey = className ?? getNamedEvaluationParameter() ?? "";
  return yield* Q(classDefinitionEvaluation(node, className, classKey));
}
