import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";

export function populateReferenceErrorPrototype(
  _realm: StaticJsRealm,
  _referenceErrorProto: StaticJsObject,
) {}

export function createReferenceErrorConstructor(
  realm: StaticJsRealm,
  refernceErrorProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "ReferenceError",
    function* (_thisArg, messageValue) {
      // Error jank seems to indicate we make a new object ourselves and return it?
      const error = realm.types.object(
        {
          name: {
            enumerable: false,
            writable: true,
            configurable: true,
            value: realm.types.string("ReferenceError"),
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
    value: refernceErrorProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  refernceErrorProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
