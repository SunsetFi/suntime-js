import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { get } from "../../../algorithms/get.js";
import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { toInteger } from "../../../algorithms/to-integer.js";
import { toObject } from "../../../algorithms/to-object.js";
import { isStaticJsArray } from "../../../types/StaticJsArray.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const arrayProtoFlatDeclaration: IntrinsicPropertyDeclaration = {
  key: "flat",
  length: 1,
  *func(realm, thisArg = realm.types.undefined, depthValue) {
    const thisObj = yield* toObject(thisArg);

    if (!depthValue) {
      depthValue = realm.types.number(1);
    }

    let depth;
    if (!isStaticJsUndefined(depthValue)) {
      depthValue = yield* toInteger(depthValue);
      depth = depthValue.value;
    } else {
      depth = 1;
    }

    // FIXME: Use ArraySpeciesCreate
    const result = yield* performFlat(thisObj, depth);
    return yield* createArrayFromList(result);
  },
};

export default arrayProtoFlatDeclaration;

function* performFlat(
  thisObj: StaticJsObject,
  depth: number,
  target: StaticJsValue[] = [],
): EvaluationGenerator<StaticJsValue[]> {
  const length = yield* lengthOfArrayLike(thisObj);

  for (let i = 0; i < length; i++) {
    const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
    if (!hasProperty) {
      // flat skips empty slots.
      continue;
    }

    const itemValue = yield* get(thisObj, String(i));
    if (depth > 0 && isStaticJsArray(itemValue)) {
      target = yield* performFlat(itemValue, depth - 1, target);
    } else {
      target.push(itemValue);
    }
  }

  return target;
}
