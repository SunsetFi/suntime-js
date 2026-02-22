import createArrayIterator from "../../../algorithms/create-array-iterator.js";
import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoKeysDeclaration: IntrinsicPropertyDeclaration = {
  key: "keys",
  *func(realm, thisArg) {
    thisArg = yield* toObject(thisArg ?? realm.types.undefined, realm);
    return yield* createArrayIterator(thisArg, "key", realm);
  },
};

export default arrayProtoKeysDeclaration;
