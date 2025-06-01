import strictEquality from "../../../algorithms/strict-equality.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoLastIndexOfDeclaration: IntrinsicPropertyDeclaration = {
  name: "lastIndexOf",
  *func(realm, thisArg, value) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    const length = yield* getLength(realm, thisObj);

    if (!value) {
      value = realm.types.undefined;
    }

    for (let i = length - 1; i >= 0; i--) {
      const hasProperty = yield* thisObj.hasPropertyEvaluator(String(i));
      if (!hasProperty) {
        continue;
      }
      const valueAtIndex = yield* thisObj.getPropertyEvaluator(String(i));
      if (strictEquality(valueAtIndex, value)) {
        return realm.types.number(i);
      }
    }

    return realm.types.number(-1);
  },
};

export default arrayProtoLastIndexOfDeclaration;
