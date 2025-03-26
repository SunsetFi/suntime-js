import { StaticJsNull } from "../../runtime/index.js";

import { NormalCompletion } from "../completions/index.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* nullLiteralNodeEvaluator(): EvaluationGenerator {
  return NormalCompletion(StaticJsNull());
}
