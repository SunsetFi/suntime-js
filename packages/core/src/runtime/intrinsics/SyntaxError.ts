import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsPlainObject } from "../types/StaticJsPlainObject.js";
import { StaticJsNativeFunctionImpl } from "../types/implementation/functions/StaticJsNativeFunctionImpl.js";

export function populateSyntaxErrorPrototype(
  _realm: StaticJsRealm,
  _syntaxErrorProto: StaticJsPlainObject,
) {}

export function createSyntaxErrorConstructor(
  realm: StaticJsRealm,
  syntaxErrorProto: StaticJsPlainObject,
) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "SyntaxError",
    function* (_thisArg, messageValue) {
      // Error jank seems to indicate we make a new object ourselves and return it?
      const error = realm.types.object(
        {
          name: {
            enumerable: false,
            writable: true,
            configurable: true,
            value: realm.types.string("SyntaxError"),
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
    value: syntaxErrorProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  syntaxErrorProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
