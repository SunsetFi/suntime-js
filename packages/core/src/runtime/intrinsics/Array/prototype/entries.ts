import createArrayIterator from "../../../algorithms/create-array-iterator.js";
import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoEntriesDeclaration: IntrinsicPropertyDeclaration = {
  key: "entries",
  *func(realm, thisArg) {
    thisArg = yield* toObject(thisArg ?? realm.types.undefined, realm);
    return yield* createArrayIterator(thisArg, "key+value", realm);
  },
};

export default arrayProtoEntriesDeclaration;
