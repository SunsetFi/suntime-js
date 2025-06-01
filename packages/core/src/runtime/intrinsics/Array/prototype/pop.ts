import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

export const arrayProtoPopDeclaration: IntrinsicPropertyDeclaration = {
  name: "pop",
  *func(realm, thisArg) {
    const thisObj = (thisArg ?? realm.types.undefined).toObject();

    const length = yield* getLength(realm, thisObj);

    if (length <= 0) {
      // This seems to re-set length to 0 even if it wasn't an array.
      // Also sets it to 0 if it was a negative length.
      yield* thisObj.setPropertyEvaluator("length", realm.types.zero, true);
      return realm.types.undefined;
    }

    const index = length - 1;
    const value = yield* thisObj.getPropertyEvaluator(String(index));

    yield* thisObj.deletePropertyEvaluator(String(index));
    yield* thisObj.setPropertyEvaluator(
      "length",
      realm.types.number(length - 1),
      true,
    );

    return value;
  },
};

export default arrayProtoPopDeclaration;
