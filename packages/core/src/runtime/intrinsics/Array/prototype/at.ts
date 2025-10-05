import toInteger from "../../../algorithms/to-integer.js";
import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

const arrayProtoAtDeclaration: IntrinsicPropertyDeclaration = {
  key: "at",
  *func(realm, thisArg, indexValue) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    if (!indexValue) {
      indexValue = realm.types.undefined;
    }

    const length = yield* lengthOfArrayLike(thisObj, realm);

    indexValue = yield* toInteger(indexValue, realm);

    let index = indexValue.value;
    if (index < 0) {
      index = length + index;
    }

    if (index < 0 || index > length) {
      return realm.types.undefined;
    }

    const value = yield* thisObj.getPropertyEvaluator(String(index));
    return value;
  },
};

export default arrayProtoAtDeclaration;
