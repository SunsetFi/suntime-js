import type { IntrinsicPropertyDeclaration } from "./utils.js";

import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";

import toString from "../algorithms/to-string.js";

const globalObjectParseFloatDeclaration: IntrinsicPropertyDeclaration = {
  key: "parseFloat",
  *func(realm, thisArg, value) {
    if (!value || isStaticJsUndefined(value) || isStaticJsNull(value)) {
      return realm.types.NaN;
    }

    // Testing on node, we do call .toString() on objects passed to this.
    const str = yield* toString(value, realm);

    const result = parseFloat(str.value);

    return realm.types.number(result);
  },
};

export default globalObjectParseFloatDeclaration;
