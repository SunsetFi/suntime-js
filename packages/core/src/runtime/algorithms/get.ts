import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsObject } from "../types/StaticJsObject.js";
import { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

export function* get(
  o: StaticJsObject,
  p: StaticJsPropertyKey,
): EvaluationGenerator<StaticJsValue> {
  return yield* o.getEvaluator(p, o);
}
