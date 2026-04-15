import type { IntrinsicPropertyDeclaration } from "./utils.js";

import { toInteger } from "../algorithms/to-integer.js";
import { toString } from "../algorithms/to-string.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";

const globalObjectParseIntDeclaration: IntrinsicPropertyDeclaration = {
  key: "parseInt",
  *func(realm, _thisArg, value, radix) {
    if (!value || isStaticJsUndefined(value) || isStaticJsNull(value)) {
      return realm.types.NaN;
    }

    // Testing on node, we do call .toString() on objects passed to this.
    const str = yield* toString(value);

    let radixValue = 10;
    if (radix && !isStaticJsUndefined(radix) && !isStaticJsNull(radix)) {
      radix = yield* toInteger(radix);
      radixValue = radix.value;
    }

    const result = parseInt(str.value, radixValue);

    return realm.types.number(result);
  },
};

export default globalObjectParseIntDeclaration;
