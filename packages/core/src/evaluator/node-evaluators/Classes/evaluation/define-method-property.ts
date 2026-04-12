import {
  isStaticJsPrivateName,
  StaticJsPrivateName,
} from "../../../../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";

import definePropertyOrThrow from "../../../../runtime/algorithms/define-property-or-throw.js";

import { StaticJsObjectLike } from "../../../../runtime/types/StaticJsObjectLike.js";
import { StaticJsPropertyDescriptorRecord } from "../../../../runtime/types/StaticJsPropertyDescriptor.js";
import { StaticJsPropertyKey } from "../../../../runtime/types/StaticJsPropertyKey.js";
import { StaticJsFunction } from "../../../../runtime/types/StaticJsFunction.js";

import { EvaluationGenerator } from "../../../EvaluationGenerator.js";

import { StaticJsPrivateElement } from "../PrivateElement.js";

export function* defineMethodProperty(
  homeObject: StaticJsObjectLike,
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
