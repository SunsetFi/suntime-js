import toObject from "../../../algorithms/to-object.js";

import createArrayIterator from "../../../algorithms/create-array-iterator.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoSymbolIteratorDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.iterator,
  *func(realm, thisArg = realm.types.undefined) {
    thisArg = yield* toObject(thisArg, realm);
    return yield* createArrayIterator(thisArg, "value", realm);
  },
};

export default arrayProtoSymbolIteratorDeclaration;
