import { get } from "../../../algorithms/get.js";
import { lengthOfArrayLike } from "../../../algorithms/length-of-array-like.js";
import { set } from "../../../algorithms/set.js";
import { toObject } from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

export const arrayProtoPopDeclaration: IntrinsicPropertyDeclaration = {
  key: "pop",
  *func(realm, thisArg = realm.types.undefined) {
    const thisObj = yield* toObject(thisArg);

    const length = yield* lengthOfArrayLike(thisObj);

    if (length <= 0) {
      // This seems to re-set length to 0 even if it wasn't an array.
      // Also sets it to 0 if it was a negative length.
      yield* set(thisObj, "length", realm.types.zero, true);
      return realm.types.undefined;
    }

    const index = length - 1;
    const value = yield* get(thisObj, String(index));

    yield* thisObj.deleteEvaluator(String(index));
    yield* set(thisObj, "length", realm.types.number(length - 1), true);

    return value;
  },
};

export default arrayProtoPopDeclaration;
