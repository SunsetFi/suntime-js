import { ReturnCompletion } from "../../evaluator/completions/ReturnCompletion.js";
import { StaticJsRealm } from "../realm/index.js";
import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";
import { StaticJsObject } from "../types/index.js";

export function populateReferenceErrorPrototype(
  _realm: StaticJsRealm,
  _errorProto: StaticJsObject,
  _functionProto: StaticJsObject,
) {}

export default function createReferenceErrorConstructor(
  realm: StaticJsRealm,
  errorProto: StaticJsObject,
  functionProto: StaticJsObject,
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

      return ReturnCompletion(error);
    },
    { prototype: functionProto },
  );

  ctor.defineProperty("prototype", {
    value: errorProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  errorProto.defineProperty("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
