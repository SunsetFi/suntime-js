import { get } from "../../../algorithms/get.js";
import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { sameValueZero } from "../../../algorithms/same-value-zero.js";
import { toInteger } from "../../../algorithms/to-integer.js";
import { toObject } from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoIncludesDeclaration: IntrinsicPropertyDeclaration = {
  key: "includes",
  *func(realm, thisArg = realm.types.undefined, value, startFromValue) {
    const thisObj = yield* toObject(thisArg);

    if (!value) {
      return realm.types.false;
    }

    const length = yield* lengthOfArrayLike(thisObj);
    if (length === 0) {
      return realm.types.false;
    }

    let startFrom = 0;
    if (startFromValue) {
      // Passing undefined here actually does something different than not passing it.
      startFromValue = yield* toInteger(startFromValue ?? realm.types.undefined);
      startFrom = startFromValue.value;
    }

    if (startFrom < 0) {
      startFrom = length + startFrom;
    }

    startFrom = Math.max(0, startFrom);

    for (let i = startFrom; i < length; i++) {
      const elementValue = yield* get(thisObj, String(i));
      const comparison = yield* sameValueZero(elementValue, value, realm);
      if (comparison.value) {
        return realm.types.true;
      }
    }

    return realm.types.false;
  },
};

export default arrayProtoIncludesDeclaration;
