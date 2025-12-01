import toObject from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

export const arrayProtoPopDeclaration: IntrinsicPropertyDeclaration = {
  key: "pop",
  *func(realm, thisArg) {
    const thisObj = yield* toObject(thisArg ?? realm.types.undefined, realm);

    const length = yield* lengthOfArrayLike(thisObj, realm);

    if (length <= 0) {
      // This seems to re-set length to 0 even if it wasn't an array.
      // Also sets it to 0 if it was a negative length.
      yield* thisObj.setEvaluator("length", realm.types.zero, true);
      return realm.types.undefined;
    }

    const index = length - 1;
    const value = yield* thisObj.getEvaluator(String(index));

    yield* thisObj.deleteEvaluator(String(index));
    yield* thisObj.setEvaluator("length", realm.types.number(length - 1), true);

    return value;
  },
};

export default arrayProtoPopDeclaration;
