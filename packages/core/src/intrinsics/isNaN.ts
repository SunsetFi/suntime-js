import { toNumber } from "#algorithms/to-number.js";
import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";

import type { IntrinsicPropertyDeclaration } from "./apply-intrinsic-properties.js";
import type { IntrinsicsRecord } from "./intrinsics.js";

export function* createIsNaN(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const func = new StaticJsNativeFunctionImpl(
    realm,
    "isNaN",
    function* (_thisArg, value = realm.types.undefined) {
      if (!value) {
        return realm.types.true;
      }

      value = yield* toNumber(value);

      const result = isNaN(value.value);

      return realm.types.boolean(result);
    },
    { length: 1 },
  );

  intrinsics["isNaN"] = func;
}

export const globalObjectIsNaNDeclaration: IntrinsicPropertyDeclaration = {
  key: "isNaN",
  writable: true,
  configurable: true,
  value: (realm) => realm.intrinsics.isNaN,
};
