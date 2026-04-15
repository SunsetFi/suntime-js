import { arrayCreate } from "../../../algorithms/array-create.js";
import { arraySpeciesCreate } from "../../../algorithms/array-species-create.js";
import { get } from "../../../algorithms/get.js";
import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { toInteger } from "../../../algorithms/to-integer.js";
import { toObject } from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoSliceDeclaration: IntrinsicPropertyDeclaration = {
  key: "slice",
  *func(realm, thisArg = realm.types.undefined, startValue, endValue) {
    const thisObj = yield* toObject(thisArg);

    const length = yield* lengthOfArrayLike(thisObj);

    let start = 0;
    if (startValue) {
      startValue = yield* toInteger(startValue);
      start = startValue.value;
      if (start < 0) {
        start = length + start;
      }
    }

    start = Math.max(0, start);

    if (start >= length) {
      return yield* arrayCreate(0);
    }

    let end = length;
    if (endValue) {
      endValue = yield* toInteger(endValue);
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
      return yield* arrayCreate(0);
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

      const value = yield* get(thisObj, property);
      yield* A.defineOwnPropertyEvaluator(String(i), {
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
