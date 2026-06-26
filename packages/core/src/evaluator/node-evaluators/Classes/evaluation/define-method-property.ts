import type { StaticJsFunction } from "#types/StaticJsFunction.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsPrivateElement } from "#types/StaticJsPrivateElement.js";
import type { StaticJsPropertyDescriptorRecord } from "#types/StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "#types/StaticJsPropertyKey.js";

import { definePropertyOrThrow } from "#algorithms/define-property-or-throw.js";
import { isStaticJsPrivateName, type StaticJsPrivateName } from "#types/StaticJsPrivateName.js";

import { EvaluationGenerator } from "../../../EvaluationGenerator.js";

export function* defineMethodProperty(
  homeObject: StaticJsObject,
  key: StaticJsPropertyKey | StaticJsPrivateName,
  closure: StaticJsFunction,
  enumerable: boolean,
): EvaluationGenerator<StaticJsPrivateElement | null> {
  if (isStaticJsPrivateName(key)) {
    return {
      type: "private-element",
      key,
      kind: "method",
      value: closure,
    } satisfies StaticJsPrivateElement;
  }

  const desc: StaticJsPropertyDescriptorRecord = {
    value: closure,
    writable: true,
    enumerable,
    configurable: true,
  };

  yield* definePropertyOrThrow(homeObject, key, desc);
  return null;
}
