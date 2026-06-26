import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";
import type { StaticJsDataPropertyDescriptor } from "../runtime/types/StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "../runtime/types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

export function* createDataProperty(
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
