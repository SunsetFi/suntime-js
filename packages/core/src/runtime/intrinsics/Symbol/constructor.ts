import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import toString from "../../algorithms/to-string.js";

import StaticJsFunctionImpl from "../../types/implementation/StaticJsFunctionImpl.js";
import {
  isStaticJsObject,
  type StaticJsObject,
} from "../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

export default function createSymbolConstructor(
  realm: StaticJsRealm,
  symbolProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Symbol",
    function* (thisArg: StaticJsValue, ...args: StaticJsValue[]) {
      if (isStaticJsObject(thisArg)) {
        throw new TypeError("Symbol is not a constructor");
      }

      let description: string | undefined = undefined;
      if (args.length > 0) {
        const descriptionVal = yield* toString(args[0], realm);
        description = descriptionVal.value;
      }

      return realm.types.symbol(description);
    },
    {
      isConstructor: false,
      prototype: functionProto,
    },
  );

  ctor.definePropertySync("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: symbolProto,
  });
  symbolProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
