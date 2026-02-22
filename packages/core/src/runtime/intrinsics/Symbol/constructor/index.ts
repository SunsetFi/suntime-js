import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import toString from "../../../algorithms/to-string.js";

import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";
import {
  isStaticJsObject,
  type StaticJsObject,
} from "../../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

import symbolCtorForDeclaration from "./for.js";
import symbolCtorKeyForDeclaration from "./keyFor.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  symbolCtorForDeclaration,
  symbolCtorKeyForDeclaration,
];

export default function createSymbolConstructor(
  realm: StaticJsRealm,
  symbolProto: StaticJsObject,
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
      construct: false,
    },
  );

  ctor.defineOwnPropertySync("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: symbolProto,
  });
  symbolProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  for (const [key, symbol] of Object.entries(realm.types.symbols)) {
    ctor.defineOwnPropertySync(key, {
      value: symbol,
      writable: false,
      enumerable: false,
      configurable: false,
    });
  }

  applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
