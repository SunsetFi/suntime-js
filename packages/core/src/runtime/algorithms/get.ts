import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

export function* get(
  o: StaticJsObjectLike,
  p: StaticJsPropertyKey,
): EvaluationGenerator<StaticJsValue> {
  return yield* o.getEvaluator(p, o);
}
