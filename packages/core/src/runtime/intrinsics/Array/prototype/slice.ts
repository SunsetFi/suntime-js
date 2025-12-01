import toInteger from "../../../algorithms/to-integer.js";
import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import arraySpeciesCreate from "../../../algorithms/array-species-create.js";

const arrayProtoSliceDeclaration: IntrinsicPropertyDeclaration = {
  key: "slice",
  *func(realm, thisArg, startValue, endValue) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    const length = yield* lengthOfArrayLike(thisObj, realm);

    let start = 0;
    if (startValue) {
      startValue = yield* toInteger(startValue, realm);
      start = startValue.value;
      if (start < 0) {
        start = length + start;
      }
    }

    start = Math.max(0, start);

    if (start >= length) {
      return realm.types.array([]);
    }

    let end = length;
    if (endValue) {
      endValue = yield* toInteger(endValue, realm);
      end = endValue.value;
      if (end < 0) {
        end = length + end;
      }
      if (end > length) {
        end = length;
      }
    }

    // Always do this, in case array.length is negative.
    end = Math.max(0, end);

    if (end <= start) {
      return realm.types.array([]);
    }

    const sliceLength = end - start;
    const A = yield* arraySpeciesCreate(thisObj, sliceLength, realm);
    for (let i = 0; i < sliceLength; i++) {
      const property = String(start + i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        // Leave the gap.
        continue;
      }

      const value = yield* thisObj.getEvaluator(property);
      yield* A.definePropertyEvaluator(String(i), {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }

    return A;
  },
};

export default arrayProtoSliceDeclaration;
