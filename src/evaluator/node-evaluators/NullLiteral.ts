import { StaticJsNull } from "../../runtime/internal.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* nullLiteralNodeEvaluator(): EvaluationGenerator {
  return StaticJsNull();
}
