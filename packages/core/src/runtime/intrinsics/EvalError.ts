import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../types/StaticJsObject.js";
import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";

export function populateEvalErrorPrototype(
  _realm: StaticJsRealm,
  _evalErrorProto: StaticJsObject,
) {}

export function createEvalErrorConstructor(
  realm: StaticJsRealm,
  evalErrorProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "EvalError",
    function* (_thisArg, messageValue) {
      // Error jank seems to indicate we make a new object ourselves and return it?
      const error = realm.types.object(
        {
          name: {
            enumerable: false,
            writable: true,
            configurable: true,
            value: realm.types.string("EvalError"),
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
    value: evalErrorProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  evalErrorProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
