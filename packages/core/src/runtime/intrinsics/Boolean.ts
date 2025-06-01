import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";

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
        return realm.types.string(thisArg.toBoolean() ? "true" : "false");
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
        return realm.types.boolean(thisArg.toBoolean());
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
        return realm.types.boolean(false);
      }

      return realm.types.boolean(value.toBoolean());
    },
    { prototype: functionProto },
  );

  ctor.defineProperty("prototype", {
    value: booleanProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  booleanProto.defineProperty("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
