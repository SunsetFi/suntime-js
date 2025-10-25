import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import toObject from "../../../algorithms/to-object.js";

import StaticJsIteratorImpl from "../../../types/implementation/StaticJsIteratorImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoEntriesDeclaration: IntrinsicPropertyDeclaration = {
  key: "entries",
  *func(realm, thisArg) {
    let index = 0;

    thisArg = yield* toObject(thisArg ?? realm.types.undefined, realm);

    return new StaticJsIteratorImpl(function* () {
      const length = yield* lengthOfArrayLike(thisArg, realm);
      if (index >= length) {
        return undefined;
      }

      const itemValue = yield* thisArg.getPropertyEvaluator(String(index));
      const result = realm.types.array([realm.types.number(index), itemValue]);

      index++;

      return result;
    }, realm);
  },
};

export default arrayProtoEntriesDeclaration;
