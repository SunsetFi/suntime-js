import toInteger from "../../../algorithms/to-integer.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoFillDeclaration: IntrinsicPropertyDeclaration = {
  name: "fill",
  *func(realm, thisArg, value, startValue, endValue) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    if (!value) {
      value = realm.types.undefined;
    }

    const length = yield* getLength(realm, thisObj);
    if (length <= 0) {
      return thisObj;
    }

    let start = 0;
    if (startValue && !isStaticJsUndefined(startValue)) {
      startValue = yield* toInteger(startValue, realm);
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
      endValue = yield* toInteger(endValue, realm);
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
      yield* thisObj.setPropertyEvaluator(String(i), value, true);
    }

    return thisObj;
  },
};

export default arrayProtoFillDeclaration;
