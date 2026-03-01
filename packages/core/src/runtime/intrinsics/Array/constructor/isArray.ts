import isArray from "../../../algorithms/is-array.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayCtorIsArrayDeclaration: IntrinsicPropertyDeclaration = {
  key: "isArray",
  *func(realm, _thisArg, arg = realm.types.undefined) {
    const argIsArray = yield* isArray(arg, realm);
    return realm.types.boolean(argIsArray);
  },
};

export default arrayCtorIsArrayDeclaration;
