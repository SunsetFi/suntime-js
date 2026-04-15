import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { get } from "../../../algorithms/get.js";
import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import toInteger from "../../../algorithms/to-integer.js";
import toObject from "../../../algorithms/to-object.js";

const arrayProtoAtDeclaration: IntrinsicPropertyDeclaration = {
  key: "at",
  *func(realm, thisArg = realm.types.undefined, indexValue) {
    const thisObj = yield* toObject(thisArg);

    if (!indexValue) {
      indexValue = realm.types.undefined;
    }

    const length = yield* lengthOfArrayLike(thisObj);

    indexValue = yield* toInteger(indexValue);

    let index = indexValue.value;
    if (index < 0) {
      index = length + index;
    }

    if (index < 0 || index > length) {
      return realm.types.undefined;
    }

    const value = yield* get(thisObj, String(index));
    return value;
  },
};

export default arrayProtoAtDeclaration;
