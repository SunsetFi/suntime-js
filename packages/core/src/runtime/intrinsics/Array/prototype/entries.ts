import createArrayIterator from "../../../algorithms/create-array-iterator.js";
import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoEntriesDeclaration: IntrinsicPropertyDeclaration = {
  key: "entries",
  *func(realm, thisArg = realm.types.undefined) {
    thisArg = yield* toObject(thisArg);
    return yield* createArrayIterator(thisArg, "key+value", realm);
  },
};

export default arrayProtoEntriesDeclaration;
