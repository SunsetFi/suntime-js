import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsPlainObject } from "../types/StaticJsPlainObject.js";
import { StaticJsNativeFunctionImpl } from "../types/implementation/functions/StaticJsNativeFunctionImpl.js";

export function populateRangeErrorPrototype(
  _realm: StaticJsRealm,
  _rangeErrorProto: StaticJsPlainObject,
) {}

export function createRangeErrorConstructor(
  realm: StaticJsRealm,
  rangeErrorProto: StaticJsPlainObject,
) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "RangeError",
    function* (_thisArg, messageValue) {
      // Error jank seems to indicate we make a new object ourselves and return it?
      const error = realm.types.object(
        {
          name: {
            enumerable: false,
            writable: true,
            configurable: true,
            value: realm.types.string("RangeError"),
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
    value: rangeErrorProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  rangeErrorProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
