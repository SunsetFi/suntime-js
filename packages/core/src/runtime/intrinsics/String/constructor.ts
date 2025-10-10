import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";

import StaticJsFunctionImpl from "../../types/implementation/StaticJsFunctionImpl.js";
import StaticJsStringBoxed from "../../types/implementation/StaticJsStringBoxed.js";

import toString from "../../algorithms/to-string.js";

import type { Prototypes } from "../intrinsics.js";

export default function createStringConstructor(
  realm: StaticJsRealm,
  stringProto: StaticJsObject,
  prototypes: Prototypes,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "String",
    function* (_thisArg, value) {
      const str = yield* toString(value ?? realm.types.undefined, realm);
      return new StaticJsStringBoxed(realm, str.value);
    },
    {
      prototype: prototypes.functionProto,
      *construct(_thisArg, value) {
        const str = yield* toString.js(value ?? realm.types.undefined, realm);
        return new StaticJsStringBoxed(realm, str);
      },
    },
  );

  ctor.definePropertySync("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: stringProto,
  });
  stringProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
