import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import definePropertyOrThrow from "../../algorithms/define-property-or-throw.js";

import toObject from "../../algorithms/to-object.js";
import toPropertyDescriptor from "../../algorithms/to-property-descriptor.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsObjectLike, StaticJsPropertyKey } from "../../types/StaticJsObjectLike.js";
import type { StaticJsPropertyDescriptor } from "../../types/StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

export default function* objectDefineProperties(
  O: StaticJsObjectLike,
  properties: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  const props = yield* toObject(properties, realm);
  const keys = yield* props.ownPropertyKeysEvaluator();
  const descriptors = new Map<StaticJsPropertyKey, Partial<StaticJsPropertyDescriptor>>();
  for (const nextKey of keys) {
    const propDesc = yield* props.getOwnPropertyEvaluator(nextKey);
    if (propDesc === undefined || !propDesc.enumerable) {
      continue;
    }

    const descObj = yield* props.getEvaluator(nextKey);
    const desc = yield* toPropertyDescriptor(descObj, realm);
    descriptors.set(nextKey, desc);
  }

  for (const [key, descriptor] of descriptors) {
    yield* definePropertyOrThrow(O, key, descriptor, realm);
  }

  return O;
}
