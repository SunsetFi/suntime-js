import { Completion } from "../../../../evaluator/completions/Completion.js";
import { setterThatIgnoresPrototypeProperties } from "../../../algorithms/setter-that-ignores-prototype-properties.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

export function* createIteratorConstructor(realm: StaticJsRealm, iteratorProto: StaticJsObject) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "Iterator",
    function* (_thisArg) {
      throw Completion.Throw("TypeError", "Iterator constructor requires 'new'");
    },
    {
      *construct(newTarget) {
        if (isStaticJsUndefined(newTarget)) {
          throw Completion.Throw("TypeError", "Iterator constructor requires 'new'");
        } else if (newTarget === realm.intrinsics.Iterator) {
          throw Completion.Throw("TypeError", "Iterator constructor requires a subclass");
        }

        return realm.types.object({}, realm.types.prototypes.iteratorProto);
      },
    },
  );

  yield* ctor.defineOwnPropertyEvaluator("prototype", {
    value: iteratorProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  yield* iteratorProto.defineOwnPropertyEvaluator("constructor", {
    enumerable: false,
    configurable: true,
    get: new StaticJsNativeFunctionImpl(realm, "get", function* () {
      return ctor;
    }),
    set: new StaticJsNativeFunctionImpl(
      realm,
      "set",
      function* (thisArg, v = realm.types.undefined) {
        yield* setterThatIgnoresPrototypeProperties(thisArg, iteratorProto, "constructor", v);
        return realm.types.undefined;
      },
    ),
  });

  return ctor;
}
