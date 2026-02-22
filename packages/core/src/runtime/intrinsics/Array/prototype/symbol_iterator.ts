import toObject from "../../../algorithms/to-object.js";

import createArrayIterator from "../../../algorithms/create-array-iterator.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoSymbolIteratorDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.iterator,
  *func(realm, thisArg) {
    thisArg = yield* toObject(thisArg ?? realm.types.undefined, realm);
    return yield* createArrayIterator(thisArg, "value", realm);
  },
};

export default arrayProtoSymbolIteratorDeclaration;
