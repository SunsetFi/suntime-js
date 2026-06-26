import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";
import type { StaticJsPropertyDescriptorRecord } from "../runtime/types/StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "../runtime/types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

import { definePropertyOrThrow } from "./define-property-or-throw.js";

export function* createNonEnumerableDataPropertyOrThrow(
  obj: StaticJsObject,
  propertyKey: StaticJsPropertyKey,
  value: StaticJsValue,
): EvaluationGenerator<void> {
  const newDesc: StaticJsPropertyDescriptorRecord = {
    value,
    writable: true,
    enumerable: false,
    configurable: true,
  };

  yield* definePropertyOrThrow(obj, propertyKey, newDesc);
}
