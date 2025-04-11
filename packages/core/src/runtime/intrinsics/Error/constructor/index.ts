import { NormalCompletion } from "../../../../evaluator/internal.js";
import { StaticJsRealm } from "../../../realm/index.js";
import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";
import { StaticJsObject } from "../../../types/index.js";
import {
  applyIntrinsicProperties,
  IntrinsicPropertyDeclaration,
} from "../../utils.js";

const declarations: IntrinsicPropertyDeclaration[] = [];

export default function createErrorConstructor(
  realm: StaticJsRealm,
  errorProto: StaticJsObject,
  functionProto: StaticJsObject,
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
        realm.types.errorProto,
      );

      return NormalCompletion(error);
    },
    { prototype: functionProto },
  );

  ctor.defineProperty("prototype", {
    value: errorProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  applyIntrinsicProperties(realm, ctor, declarations, functionProto);

  return ctor;
}
