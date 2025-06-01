import sameValueZero from "../../../algorithms/same-value-zero.js";
import toInteger from "../../../algorithms/to-integer.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoIncludesDeclaration: IntrinsicPropertyDeclaration = {
  name: "includes",
  *func(realm, thisArg, value, startFromValue) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    if (!value) {
      return realm.types.false;
    }

    const length = yield* getLength(realm, thisObj);
    if (length === 0) {
      return realm.types.false;
    }

    let startFrom = 0;
    if (startFromValue) {
      startFrom = toInteger(startFromValue);
    }

    if (startFrom < 0) {
      startFrom = length + startFrom;
    }

    startFrom = Math.max(0, startFrom);

    for (let i = startFrom; i < length; i++) {
      const elementValue = yield* thisObj.getPropertyEvaluator(String(i));
      if (sameValueZero(elementValue, value)) {
        return realm.types.true;
      }
    }

    return realm.types.false;
  },
};

export default arrayProtoIncludesDeclaration;
