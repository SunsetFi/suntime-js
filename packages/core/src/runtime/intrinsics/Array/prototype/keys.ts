import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import toObject from "../../../algorithms/to-object.js";

import StaticJsIteratorImpl from "../../../types/implementation/StaticJsIteratorImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoKeysDeclaration: IntrinsicPropertyDeclaration = {
  key: "keys",
  *func(realm, thisArg) {
    let index = 0;

    thisArg = yield* toObject(thisArg ?? realm.types.undefined, realm);

    return new StaticJsIteratorImpl(function* () {
      const length = yield* lengthOfArrayLike(thisArg, realm);
      if (index >= length) {
        return undefined;
      }

      const value = realm.types.number(index);
      index++;
      return value;
    }, realm);
  },
};

export default arrayProtoKeysDeclaration;
