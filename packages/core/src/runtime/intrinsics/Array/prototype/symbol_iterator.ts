import toObject from "../../../algorithms/to-object.js";

import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";

import StaticJsIteratorImpl from "../../../types/implementation/StaticJsIteratorImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoSymbolIteratorDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.iterator,
  *func(realm, thisArg) {
    let index = 0;

    thisArg = yield* toObject(thisArg ?? realm.types.undefined, realm);

    return new StaticJsIteratorImpl(function* () {
      const length = yield* lengthOfArrayLike(thisArg, realm);
      if (index >= length) {
        return undefined;
      }

      const result = yield* thisArg.getEvaluator(String(index));

      index++;

      return result;
    }, realm);
  },
};

export default arrayProtoSymbolIteratorDeclaration;
