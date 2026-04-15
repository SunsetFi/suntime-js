import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { createArrayIterator } from "../../../algorithms/create-array-iterator.js";
import { toObject } from "../../../algorithms/to-object.js";

const arrayProtoKeysDeclaration: IntrinsicPropertyDeclaration = {
  key: "keys",
  *func(realm, thisArg = realm.types.undefined) {
    thisArg = yield* toObject(thisArg);
    return yield* createArrayIterator(thisArg, "key", realm);
  },
};

export default arrayProtoKeysDeclaration;
