import { toNumber } from "../algorithms/to-number.js";

import type { IntrinsicPropertyDeclaration } from "./utils.js";

const globalObjectIsNaNDeclaration: IntrinsicPropertyDeclaration = {
  key: "isNaN",
  *func(realm, _thisArg, value) {
    if (!value) {
      return realm.types.true;
    }

    value = yield* toNumber(value);

    const result = isNaN(value.value);

    return realm.types.boolean(result);
  },
};

export default globalObjectIsNaNDeclaration;
