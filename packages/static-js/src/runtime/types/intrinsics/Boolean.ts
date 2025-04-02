import { ReturnCompletion } from "../../../evaluator/internal.js";
import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";
import StaticJsFunctionImpl from "../implementation/StaticJsFunctionImpl.js";
import { StaticJsObject } from "../interfaces/StaticJsObject.js";

export function populateBooleanPrototype(
  realm: StaticJsRealm,
  booleanProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  booleanProto.defineProperty("toString", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toString",
      function* (thisArg) {
        return ReturnCompletion(
          realm.types.string(thisArg.toBoolean() ? "true" : "false"),
        );
      },
      { prototype: functionProto },
    ),
  });

  booleanProto.defineProperty("valueOf", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "valueOf",
      function* (thisArg) {
        // Unbox.
        return ReturnCompletion(realm.types.boolean(thisArg.toBoolean()));
      },
      { prototype: functionProto },
    ),
  });

  return booleanProto;
}

export function createBooleanConstructor(
  realm: StaticJsRealm,
  booleanProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Boolean",
    function* (thisArg, value) {
      if (thisArg === undefined) {
        return ReturnCompletion(realm.types.boolean(false));
      }

      return ReturnCompletion(realm.types.boolean(value.toBoolean()));
    },
    { prototype: functionProto },
  );

  ctor.defineProperty("prototype", {
    value: booleanProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  return ctor;
}
