import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsPropertyKey } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import type { StaticJsDataPropertyDescriptor } from "../types/StaticJsPropertyDescriptor.js";

export default function* createDataProperty(
  O: StaticJsObjectLike,
  P: StaticJsPropertyKey,
  V: StaticJsValue,
): EvaluationGenerator<boolean> {
  const desc: StaticJsDataPropertyDescriptor = {
    value: V,
    writable: true,
    enumerable: true,
    configurable: true,
  };
  return yield* O.defineOwnPropertyEvaluator(P, desc);
}
