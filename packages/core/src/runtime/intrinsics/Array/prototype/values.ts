import createArrayIterator from "../../../algorithms/create-array-iterator.js";
import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayProtoValuesDeclaration: IntrinsicPropertyDeclaration = {
  key: "values",
  *func(realm, thisArg) {
    thisArg = yield* toObject(thisArg, realm);
    return yield* createArrayIterator(thisArg, "value", realm);
  },
};

export default arrayProtoValuesDeclaration;
