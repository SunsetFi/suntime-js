import { toNumber } from "../../algorithms/to-number.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../../types/implementation/functions/StaticJsNativeFunctionImpl.js";

import type { IntrinsicPropertyDeclaration } from "./apply-intrinsic-properties.js";
import type { IntrinsicsRecord } from "./intrinsics.js";

export function* createIsFinite(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const func = new StaticJsNativeFunctionImpl(
    realm,
    "isFinite",
    function* (_thisArg, value = realm.types.undefined) {
      value = yield* toNumber(value);

      const result = isFinite(value.value);

      return realm.types.boolean(result);
    },
    { length: 1 },
  );

  intrinsics["isFinite"] = func;
}

export const globalObjectIsFiniteDeclaration: IntrinsicPropertyDeclaration = {
  key: "isFinite",
  writable: true,
  configurable: true,
  value: (realm) => realm.intrinsics.isFinite,
};
