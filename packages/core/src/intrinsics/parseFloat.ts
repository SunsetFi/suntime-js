import { toString } from "../algorithms/to-string.js";
import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";

import type { IntrinsicPropertyDeclaration } from "./apply-intrinsic-properties.js";
import type { IntrinsicsRecord } from "./intrinsics.js";

export function* createParseFloat(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const func = new StaticJsNativeFunctionImpl(
    realm,
    "parseFloat",
    function* (_thisArg, value = realm.types.undefined) {
      if (!value || isStaticJsUndefined(value) || isStaticJsNull(value)) {
        return realm.types.NaN;
      }

      // Testing on node, we do call .toString() on objects passed to this.
      const str = yield* toString(value);

      const result = parseFloat(str.value);

      return realm.types.number(result);
    },
    { length: 1 },
  );

  intrinsics.parseFloat = func;
}

export const globalObjectParseFloatDeclaration: IntrinsicPropertyDeclaration = {
  key: "parseFloat",
  *func(realm, _thisArg, value) {
    if (!value || isStaticJsUndefined(value) || isStaticJsNull(value)) {
      return realm.types.NaN;
    }

    // Testing on node, we do call .toString() on objects passed to this.
    const str = yield* toString(value);

    const result = parseFloat(str.value);

    return realm.types.number(result);
  },
};
