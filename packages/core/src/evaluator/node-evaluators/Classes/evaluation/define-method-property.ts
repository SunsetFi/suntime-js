import definePropertyOrThrow from "../../../../runtime/algorithms/define-property-or-throw.js";

import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { StaticJsPropertyDescriptorRecord } from "../../../../runtime/types/StaticJsPropertyDescriptor.js";
import { StaticJsPropertyKey } from "../../../../runtime/types/StaticJsPropertyKey.js";
import { StaticJsFunction } from "../../../../runtime/types/StaticJsFunction.js";
import {
  isStaticJsPrivateName,
  StaticJsPrivateName,
} from "../../../../runtime/types/StaticJsPrivateName.js";

import { EvaluationGenerator } from "../../../EvaluationGenerator.js";

import { StaticJsPrivateElement } from "../../../../runtime/types/StaticJsPrivateElement.js";

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
