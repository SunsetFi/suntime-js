import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";

import { toBoolean } from "#algorithms/to-boolean.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsBooleanBoxed } from "#types/implementation/primitives/StaticJsBooleanBoxed.js";

export function* createBooleanConstructor(realm: StaticJsRealm, booleanProto: StaticJsObject) {
  const ctor = StaticJsNativeFunctionImpl.create(
    realm,
    "Boolean",
    function* (_thisArg, value = realm.types.undefined) {
      return yield* toBoolean(value);
    },
    {
      *construct(_thisArg, value = realm.types.undefined) {
        const boolVal = yield* toBoolean.js(value);
        return StaticJsBooleanBoxed.create({ realm, value: boolVal });
      },
    },
  );

  yield* ctor.defineOwnPropertyEvaluator("prototype", {
    value: booleanProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  yield* booleanProto.defineOwnPropertyEvaluator("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
