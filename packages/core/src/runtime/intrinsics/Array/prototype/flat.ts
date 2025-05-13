import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";
import {
  ThrowCompletion,
  isThrowCompletion,
} from "../../../../evaluator/completions/ThrowCompletion.js";
import EvaluationGenerator from "../../../../evaluator/EvaluationGenerator.js";

import toInteger from "../../../algorithms/to-integer.js";

import { StaticJsRealm } from "../../../realm/index.js";
import {
  isStaticJsArray,
  isStaticJsUndefined,
  StaticJsObjectLike,
  StaticJsValue,
} from "../../../types/index.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoFlatDeclaration: IntrinsicPropertyDeclaration = {
  name: "flat",
  *func(realm, thisArg, depthValue) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!depthValue) {
      depthValue = realm.types.number(1);
    }

    let depth;
    if (isStaticJsUndefined(depthValue)) {
      depth = 1;
    } else {
      depth = toInteger(depthValue);
    }

    const result = yield* performFlat(realm, thisObj, depth);
    if (isThrowCompletion(result)) {
      return result;
    }

    return ReturnCompletion(realm.types.array(result));
  },
};

export default arrayProtoFlatDeclaration;

function* performFlat(
  realm: StaticJsRealm,
  thisObj: StaticJsObjectLike,
  depth: number,
  target: StaticJsValue[] = [],
): EvaluationGenerator<ThrowCompletion | StaticJsValue[]> {
  const length = yield* getLength(realm, thisObj);
  if (isThrowCompletion(length)) {
    return length;
  }

  for (let i = 0; i < length; i++) {
    const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
    if (!hasProperty) {
      // flat skips empty slots.
      continue;
    }

    const itemValue = yield* thisObj.getPropertyEvaluator(String(i));
    if (depth > 0 && isStaticJsArray(itemValue)) {
      const result = yield* performFlat(realm, itemValue, depth - 1, target);
      if (isThrowCompletion(result)) {
        return result;
      }

      target = result;
    } else {
      target.push(itemValue);
    }
  }

  return target;
}
