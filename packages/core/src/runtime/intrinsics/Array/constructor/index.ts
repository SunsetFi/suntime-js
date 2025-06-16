import toInteger from "../../../algorithms/to-integer.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import StaticJsArrayImpl from "../../../types/implementation/StaticJsArrayImpl.js";
import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionBase.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

export default function createArrayConstructor(
  realm: StaticJsRealm,
  arrayProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Array",
    function* (_thisArg, lengthValue) {
      const length = yield* toInteger(
        lengthValue ?? realm.types.undefined,
        realm,
      );

      // FIXME: Returning our own object instead of obeying the prototype chain.
      const array = new StaticJsArrayImpl(realm);

      yield* array.setPropertyEvaluator("length", length, false);
      return array;
    },
    { prototype: functionProto, isConstructor: true },
  );

  ctor.definePropertySync("prototype", {
    value: arrayProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  arrayProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
