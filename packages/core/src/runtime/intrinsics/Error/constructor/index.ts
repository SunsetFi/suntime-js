import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import type { IntrinsicSymbols, Prototypes } from "../../intrinsics.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

const declarations: IntrinsicPropertyDeclaration[] = [];

export default function createErrorConstructor(
  realm: StaticJsRealm,
  errorProto: StaticJsObject,
  prototypes: Prototypes,
  intrinsicSymbols: IntrinsicSymbols,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Error",
    function* (_thisArg, messageValue) {
      // Error jank seems to indicate we make a new object ourselves and return it?
      const error = realm.types.object(
        {
          name: {
            enumerable: false,
            writable: true,
            configurable: true,
            value: realm.types.string("Error"),
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
    { prototype: prototypes.functionProto, isConstructor: true },
  );

  ctor.definePropertySync("prototype", {
    value: errorProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  errorProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  applyIntrinsicProperties(
    realm,
    ctor,
    declarations,
    prototypes,
    intrinsicSymbols,
  );

  return ctor;
}
