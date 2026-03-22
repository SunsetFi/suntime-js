import createArrayIterator from "../../../algorithms/create-array-iterator.js";
import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoKeysDeclaration: IntrinsicPropertyDeclaration = {
  key: "keys",
  *func(realm, thisArg = realm.types.undefined) {
    thisArg = yield* toObject(thisArg);
    return yield* createArrayIterator(thisArg, "key", realm);
  },
};

export default arrayProtoKeysDeclaration;
