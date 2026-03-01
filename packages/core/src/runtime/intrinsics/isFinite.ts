import type { IntrinsicPropertyDeclaration } from "./utils.js";

import toNumber from "../algorithms/to-number.js";

const globalObjectIsFiniteDeclaration: IntrinsicPropertyDeclaration = {
  key: "isFinite",
  *func(realm, thisArg, value = realm.types.undefined) {
    value = yield* toNumber(value, realm);

    const result = isFinite(value.value);

    return realm.types.boolean(result);
  },
};

export default globalObjectIsFiniteDeclaration;
