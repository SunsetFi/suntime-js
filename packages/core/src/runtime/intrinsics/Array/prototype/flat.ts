import type EvaluationGenerator from "../../../../evaluator/EvaluationGenerator.js";

import toInteger from "../../../algorithms/to-integer.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import { isStaticJsArray } from "../../../types/StaticJsArray.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { StaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import toObject from "../../../algorithms/to-object.js";

const arrayProtoFlatDeclaration: IntrinsicPropertyDeclaration = {
  key: "flat",
  *func(realm, thisArg, depthValue) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    if (!depthValue) {
      depthValue = realm.types.number(1);
    }

    let depth;
    if (!isStaticJsUndefined(depthValue)) {
      depthValue = yield* toInteger(depthValue, realm);
      depth = depthValue.value;
    } else {
      depth = 1;
    }

    // FIXME: Use ArraySpeciesCreate
    const result = yield* performFlat(realm, thisObj, depth);

    return realm.types.array(result);
  },
};

export default arrayProtoFlatDeclaration;

function* performFlat(
  realm: StaticJsRealm,
  thisObj: StaticJsObjectLike,
  depth: number,
  target: StaticJsValue[] = [],
): EvaluationGenerator<StaticJsValue[]> {
  const length = yield* lengthOfArrayLike(thisObj, realm);

  for (let i = 0; i < length; i++) {
    const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
    if (!hasProperty) {
      // flat skips empty slots.
      continue;
    }

    const itemValue = yield* thisObj.getEvaluator(String(i));
    if (depth > 0 && isStaticJsArray(itemValue)) {
      target = yield* performFlat(realm, itemValue, depth - 1, target);
    } else {
      target.push(itemValue);
    }
  }

  return target;
}
