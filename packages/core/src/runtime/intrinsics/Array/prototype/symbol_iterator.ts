import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { createArrayIterator } from "../../../algorithms/create-array-iterator.js";
import { toObject } from "../../../algorithms/to-object.js";

const arrayProtoSymbolIteratorDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.iterator,
  *func(realm, thisArg = realm.types.undefined) {
    thisArg = yield* toObject(thisArg);
    return yield* createArrayIterator(thisArg, "value", realm);
  },
};

export default arrayProtoSymbolIteratorDeclaration;
