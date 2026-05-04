import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsObject } from "../types/StaticJsObject.js";
import { StaticJsPropertyDescriptorRecord } from "../types/StaticJsPropertyDescriptor.js";
import { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

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
