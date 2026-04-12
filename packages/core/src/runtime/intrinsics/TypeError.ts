import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { StaticJsNativeFunctionImpl } from "../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import type { StaticJsPlainObject } from "../types/StaticJsPlainObject.js";

export function populateTypeErrorPrototype(
  _realm: StaticJsRealm,
  _typeErrorProto: StaticJsPlainObject,
) {}

export function createTypeErrorConstructor(
  realm: StaticJsRealm,
  typeErrorProto: StaticJsPlainObject,
) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "TypeError",
    function* (_thisArg, messageValue) {
      // Error jank seems to indicate we make a new object ourselves and return it?
      const error = realm.types.object(
        {
          name: {
            enumerable: false,
            writable: true,
            configurable: true,
            value: realm.types.string("TypeError"),
          },
          message: {
            enumerable: false,
            writable: true,
            configurable: true,
            value: messageValue ?? realm.types.string(""),
          },
        },
        realm.types.prototypes.errorProto,
      );

      return error;
    },
    { construct: true },
  );

  ctor.defineOwnPropertySync("prototype", {
    value: typeErrorProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  typeErrorProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
