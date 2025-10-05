import isArray from "../../../algorithms/is-array.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayConstructorIsArrayDeclaration: IntrinsicPropertyDeclaration = {
  key: "isArray",
  *func(realm, _thisArg, arg) {
    const argIsArray = yield* isArray(arg ?? realm.types.undefined, realm);
    return realm.types.boolean(argIsArray);
  },
};

export default arrayConstructorIsArrayDeclaration;
