import type { IntrinsicPropertyDeclaration } from "./utils.js";

import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";

import toString from "../algorithms/to-string.js";
import toInteger from "../algorithms/to-integer.js";

const globalObjectParseIntDeclaration: IntrinsicPropertyDeclaration = {
  name: "parseInt",
  *func(realm, thisArg, value, radix) {
    if (!value || isStaticJsUndefined(value) || isStaticJsNull(value)) {
      return realm.types.NaN;
    }

    // Testing on node, we do call .toString() on objects passed to this.
    const str = yield* toString(value, realm);

    let radixValue = 10;
    if (radix && !isStaticJsUndefined(radix) && !isStaticJsNull(radix)) {
      radix = yield* toInteger(radix, realm);
      radixValue = radix.value;
    }

    const result = parseInt(str.value, radixValue);

    return realm.types.number(result);
  },
};

export default globalObjectParseIntDeclaration;
