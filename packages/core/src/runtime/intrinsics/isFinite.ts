import { toNumber } from "../algorithms/to-number.js";

import type { IntrinsicPropertyDeclaration } from "./utils.js";

const globalObjectIsFiniteDeclaration: IntrinsicPropertyDeclaration = {
  key: "isFinite",
  length: 1,
  *func(realm, _thisArg, value = realm.types.undefined) {
    value = yield* toNumber(value);

    const result = isFinite(value.value);

    return realm.types.boolean(result);
  },
};

export default globalObjectIsFiniteDeclaration;
