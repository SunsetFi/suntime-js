import toInteger from "../../../algorithms/to-integer.js";

import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoSliceDeclaration: IntrinsicPropertyDeclaration = {
  name: "slice",
  *func(realm, thisArg, startValue, endValue) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    const length = yield* getLength(realm, thisObj);

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
    const items: StaticJsValue[] = new Array(sliceLength);
    for (let i = 0; i < sliceLength; i++) {
      const property = String(start + i);
      const hasProperty = yield* thisObj.hasPropertyEvaluator(property);
      if (!hasProperty) {
        // Leave the gap.
        continue;
      }

      const value = yield* thisObj.getPropertyEvaluator(property);
      items[i] = value;
    }

    return realm.types.array(items);
  },
};

export default arrayProtoSliceDeclaration;
