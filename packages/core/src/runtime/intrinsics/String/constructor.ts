import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

import StaticJsFunctionImpl from "../../types/implementation/StaticJsFunctionImpl.js";
import StaticJsStringBoxed from "../../types/implementation/StaticJsStringBoxed.js";

import toString from "../../algorithms/to-string.js";

export default function createStringConstructor(
  realm: StaticJsRealm,
  stringProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  // FIXME: This is the casting function, but if it's invoked with 'new', we should
  // return the boxed version.
  const ctor = new StaticJsFunctionImpl(
    realm,
    "String",
    function* (_thisArg: StaticJsValue, value?: StaticJsValue) {
      // FIXME: Return unboxed string if not called with 'new'.
      if (value === undefined) {
        return new StaticJsStringBoxed(realm, "");
      }

      const str = yield* toString(value, realm);
      return new StaticJsStringBoxed(realm, str.value);
    },
    { prototype: functionProto },
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
