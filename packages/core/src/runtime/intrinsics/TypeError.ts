import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";

export function populateTypeErrorPrototype(
  _realm: StaticJsRealm,
  _typeErrorProto: StaticJsObject,
) {}

export function createTypeErrorConstructor(
  realm: StaticJsRealm,
  typeErrorProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
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

  ctor.definePropertySync("prototype", {
    value: typeErrorProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  typeErrorProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
