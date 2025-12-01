import strictEquality from "../../../algorithms/strict-equality.js";
import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

const arrayProtoLastIndexOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "lastIndexOf",
  *func(realm, thisArg, value) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    const length = yield* lengthOfArrayLike(thisObj, realm);

    if (!value) {
      value = realm.types.undefined;
    }

    for (let i = length - 1; i >= 0; i--) {
      const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
      if (!hasProperty) {
        continue;
      }
      const valueAtIndex = yield* thisObj.getEvaluator(String(i));
      const comparison = yield* strictEquality(valueAtIndex, value, realm);
      if (comparison.value) {
        return realm.types.number(i);
      }
    }

    return realm.types.number(-1);
  },
};

export default arrayProtoLastIndexOfDeclaration;
