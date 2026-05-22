import { requireObjectCoercible } from "../../../algorithms/require-object-coercible.js";
import { toIntegerOrInfinity } from "../../../algorithms/to-integer-or-infinity.js";
import { toString } from "../../../algorithms/to-string.js";
import { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const stringProtoAtDeclaration: IntrinsicPropertyDeclaration = {
  key: "at",
  length: 1,
  *func(realm, thisArg = realm.types.undefined, index = realm.types.undefined) {
    yield* requireObjectCoercible(thisArg);
    requireObjectCoercible.enforce(thisArg);

    const str = yield* toString.js(thisArg);
    const len = str.length;
    const relativeIndex = yield* toIntegerOrInfinity.js(index);

    let k: number;
    if (relativeIndex >= 0) {
      k = relativeIndex;
    } else {
      k = len + relativeIndex;
    }

    if (k < 0 || k >= len) {
      return realm.types.undefined;
    }

    return realm.types.string(str.substring(k, k + 1));
  },
};
