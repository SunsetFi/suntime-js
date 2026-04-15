import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { get } from "../../../algorithms/get.js";
import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import strictEquality from "../../../algorithms/strict-equality.js";
import toObject from "../../../algorithms/to-object.js";

const arrayProtoIndexOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "indexOf",
  *func(realm, thisArg = realm.types.undefined, value) {
    const thisObj = yield* toObject(thisArg);

    const length = yield* lengthOfArrayLike(thisObj);

    if (!value) {
      value = realm.types.undefined;
    }

    for (let i = 0; i < length; i++) {
      const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
      if (!hasProperty) {
        continue;
      }
      const valueAtIndex = yield* get(thisObj, String(i));
      const comparison = yield* strictEquality(valueAtIndex, value, realm);
      if (comparison.value) {
        return realm.types.number(i);
      }
    }

    return realm.types.number(-1);
  },
};

export default arrayProtoIndexOfDeclaration;
