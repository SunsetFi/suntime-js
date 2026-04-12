import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import type { StaticJsDataPropertyDescriptor } from "../types/StaticJsPropertyDescriptor.js";

export default function* createDataProperty(
  O: StaticJsObject,
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
