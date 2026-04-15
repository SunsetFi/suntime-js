import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";
import type { StaticJsPropertyDescriptorRecord } from "../../types/StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "../../types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

import { definePropertyOrThrow } from "../../algorithms/define-property-or-throw.js";
import { get } from "../../algorithms/get.js";
import { toObject } from "../../algorithms/to-object.js";
import { toPropertyDescriptor } from "../../algorithms/to-property-descriptor.js";

export default function* objectDefineProperties(
  O: StaticJsObject,
  properties: StaticJsValue,
): EvaluationGenerator<StaticJsObject> {
  const props = yield* toObject(properties);
  const keys = yield* props.ownPropertyKeysEvaluator();
  const descriptors = new Map<StaticJsPropertyKey, StaticJsPropertyDescriptorRecord>();
  for (const nextKey of keys) {
    const propDesc = yield* props.getOwnPropertyEvaluator(nextKey);
    if (propDesc === undefined || !propDesc.enumerable) {
      continue;
    }

    const descObj = yield* get(props, nextKey);
    const desc = yield* toPropertyDescriptor(descObj);
    descriptors.set(nextKey, desc);
  }

  for (const [key, descriptor] of descriptors) {
    yield* definePropertyOrThrow(O, key, descriptor);
  }

  return O;
}
