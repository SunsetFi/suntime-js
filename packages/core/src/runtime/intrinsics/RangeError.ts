import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../types/StaticJsObject.js";
import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";

export function populateRangeErrorPrototype(
  _realm: StaticJsRealm,
  _rangeErrorProto: StaticJsObject,
) {}

export function createRangeErrorConstructor(
  realm: StaticJsRealm,
  rangeErrorProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
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

  ctor.definePropertySync("prototype", {
    value: rangeErrorProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  rangeErrorProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
