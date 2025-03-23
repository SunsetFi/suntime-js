import { StaticJsNull } from "../../runtime/index.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* nullLiteralNodeEvaluator(): EvaluationGenerator {
  return StaticJsNull();
}
