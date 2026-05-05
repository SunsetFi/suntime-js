import { toBoolean } from "../../../algorithms/to-boolean.js";
import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsBooleanBoxed } from "../../../types/implementation/primitives/StaticJsBooleanBoxed.js";
import { StaticJsObject } from "../../../types/StaticJsObject.js";

export function* createBooleanConstructor(realm: StaticJsRealm, booleanProto: StaticJsObject) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "Boolean",
    function* (_thisArg, value = realm.types.undefined) {
      return yield* toBoolean(value);
    },
    {
      *construct(_thisArg, value = realm.types.undefined) {
        const boolVal = yield* toBoolean.js(value);
        return new StaticJsBooleanBoxed(realm, boolVal);
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
