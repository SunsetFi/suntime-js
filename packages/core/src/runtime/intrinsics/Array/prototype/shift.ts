import toObject from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

const arrayProtoShiftDeclaration: IntrinsicPropertyDeclaration = {
  key: "shift",
  *func(realm, thisArg) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    const length = yield* lengthOfArrayLike(thisObj, realm);

    if (length <= 0) {
      yield* thisObj.setPropertyEvaluator("length", realm.types.zero, true);
      return realm.types.undefined;
    }

    const value = yield* thisObj.getPropertyEvaluator("0");

    for (let i = 0; i < length - 1; i++) {
      const fromProperty = String(i + 1);
      const toProperty = String(i);

      const hasFromProperty = yield* thisObj.hasPropertyEvaluator(fromProperty);

      if (!hasFromProperty) {
        yield* thisObj.deletePropertyEvaluator(toProperty);
        continue;
      }

      const fromValue = yield* thisObj.getPropertyEvaluator(fromProperty);
      yield* thisObj.setPropertyEvaluator(toProperty, fromValue, true);
    }

    yield* thisObj.deletePropertyEvaluator(String(length - 1));
    yield* thisObj.setPropertyEvaluator(
      "length",
      realm.types.number(length - 1),
      true,
    );

    return value;
  },
};

export default arrayProtoShiftDeclaration;
