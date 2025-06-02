import strictEquality from "../../../algorithms/strict-equality.js";
import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoIndexOfDeclaration: IntrinsicPropertyDeclaration = {
  name: "indexOf",
  *func(realm, thisArg, value) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    const length = yield* getLength(realm, thisObj);

    if (!value) {
      value = realm.types.undefined;
    }

    for (let i = 0; i < length; i++) {
      const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
      if (!hasProperty) {
        continue;
      }
      const valueAtIndex = yield* thisObj.getPropertyEvaluator(String(i));
      const comparison = yield* strictEquality(valueAtIndex, value, realm);
      if (comparison.value) {
        return realm.types.number(i);
      }
    }

    return realm.types.number(-1);
  },
};

export default arrayProtoIndexOfDeclaration;
