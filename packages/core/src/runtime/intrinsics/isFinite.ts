import type { IntrinsicPropertyDeclaration } from "./utils.js";

import toNumber from "../algorithms/to-number.js";

const globalObjectIsFiniteDeclaration: IntrinsicPropertyDeclaration = {
  name: "isFinite",
  *func(realm, thisArg, value) {
    value = yield* toNumber(value ?? realm.types.undefined, realm);

    const result = isFinite(value.value);

    return realm.types.boolean(result);
  },
};

export default globalObjectIsFiniteDeclaration;
