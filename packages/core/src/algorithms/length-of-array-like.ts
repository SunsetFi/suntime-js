import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";

import { get } from "./get.js";
import { toLength } from "./to-length.js";

export function* lengthOfArrayLike(obj: StaticJsObject): EvaluationGenerator<number> {
  let lengthValue = yield* get(obj, "length");
  return yield* toLength(lengthValue);
}
