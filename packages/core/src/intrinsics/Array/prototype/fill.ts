import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { set } from "../../../algorithms/set.js";
import { toInteger } from "../../../algorithms/to-integer.js";
import { toObject } from "../../../algorithms/to-object.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const arrayProtoFillDeclaration: IntrinsicPropertyDeclaration = {
  key: "fill",
  length: 1,
  *func(realm, thisArg = realm.types.undefined, value, startValue, endValue) {
    const thisObj = yield* toObject(thisArg);

    if (!value) {
      value = realm.types.undefined;
    }

    const length = yield* lengthOfArrayLike(thisObj);
    if (length <= 0) {
      return thisObj;
    }

    let start = 0;
    if (startValue && !isStaticJsUndefined(startValue)) {
      startValue = yield* toInteger(startValue);
      start = startValue.value;
      if (start < 0) {
        start = length + start;
      }
    }

    start = Math.max(0, start);

    if (start >= length) {
      return thisObj;
    }

    let end = length;
    if (endValue && !isStaticJsUndefined(endValue)) {
      endValue = yield* toInteger(endValue);
      end = endValue.value;
      if (end < 0) {
        end = length + end;
      }
    }

    end = Math.max(0, end);

    if (end > length) {
      end = length;
    }

    for (let i = start; i < end; i++) {
      yield* set(thisObj, String(i), value, true);
    }

    return thisObj;
  },
};

export default arrayProtoFillDeclaration;
