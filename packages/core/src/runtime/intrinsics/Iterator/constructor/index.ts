import { Completion } from "../../../../evaluator/completions/Completion.js";
import setterThatIgnoresPrototypeProperties from "../../../algorithms/setter-that-ignores-prototype-properties.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";

export default function createIteratorConstructor(
  realm: StaticJsRealm,
  iteratorProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Iterator",
    function* (_thisArg) {
      throw Completion.Throw(
        realm.types.error("TypeError", "Iterator constructor requires 'new'"),
      );
    },
    {
      *construct(newTarget) {
        if (
          isStaticJsUndefined(newTarget) ||
          newTarget === realm.types.constructors.Iterator
        ) {
          throw Completion.Throw(
            realm.types.error(
              "TypeError",
              "Iterator constructor requires 'new'",
            ),
          );
        }

        return realm.types.object({}, realm.types.prototypes.iteratorProto);
      },
    },
  );

  ctor.defineOwnPropertySync("prototype", {
    value: iteratorProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  iteratorProto.defineOwnPropertySync("constructor", {
    enumerable: false,
    configurable: true,
    get: new StaticJsFunctionImpl(realm, "get", function* () {
      return ctor;
    }),
    set: new StaticJsFunctionImpl(realm, "set", function* (
      thisArg,
      v = realm.types.undefined,
    ) {
      yield* setterThatIgnoresPrototypeProperties(
        thisArg,
        iteratorProto,
        "constructor",
        v,
        realm,
      );
      return realm.types.undefined;
    }),
  });

  return ctor;
}
