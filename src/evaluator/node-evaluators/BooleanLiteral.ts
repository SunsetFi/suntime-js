import { BooleanLiteral } from "@babel/types";

import { StaticJsBoolean } from "../../runtime/index.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import { NormalCompletion } from "../completions/index.js";

export default function* booleanLiteralNodeEvaluator(
  node: BooleanLiteral,
): EvaluationGenerator {
  return NormalCompletion(StaticJsBoolean(node.value));
}
