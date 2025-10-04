import type { IntrinsicPropertyDeclaration } from "./utils.js";

import toNumber from "../algorithms/to-number.js";

const globalObjectIsNaNDeclaration: IntrinsicPropertyDeclaration = {
  key: "isNaN",
  *func(realm, thisArg, value) {
    if (!value) {
      return realm.types.true;
    }

    value = yield* toNumber(value, realm);

    const result = isNaN(value.value);

    return realm.types.boolean(result);
  },
};

export default globalObjectIsNaNDeclaration;
