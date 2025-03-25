import { BooleanLiteral } from "@babel/types";

import { StaticJsBoolean } from "../../runtime/internal.js";

import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* booleanLiteralNodeEvaluator(
  node: BooleanLiteral,
): EvaluationGenerator {
  return StaticJsBoolean(node.value);
}
