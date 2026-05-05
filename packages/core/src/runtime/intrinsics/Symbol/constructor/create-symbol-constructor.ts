import { toString } from "../../../algorithms/to-string.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { isStaticJsObject, type StaticJsObject } from "../../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

import symbolCtorForDeclaration from "./for.js";
import symbolCtorKeyForDeclaration from "./keyFor.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  symbolCtorForDeclaration,
  symbolCtorKeyForDeclaration,
];

export function* createSymbolConstructor(realm: StaticJsRealm, symbolProto: StaticJsObject) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "Symbol",
    function* (thisArg: StaticJsValue, ...args: StaticJsValue[]) {
      if (isStaticJsObject(thisArg)) {
        throw new TypeError("Symbol is not a constructor");
      }

      let description: string | undefined = undefined;
      if (args.length > 0) {
        const descriptionVal = yield* toString(args[0]);
        description = descriptionVal.value;
      }

      return realm.types.symbol(description);
    },
    {
      construct: false,
    },
  );

  yield* ctor.defineOwnPropertyEvaluator("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: symbolProto,
  });
  yield* symbolProto.defineOwnPropertyEvaluator("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  for (const [key, symbol] of Object.entries(realm.types.symbols)) {
    yield* ctor.defineOwnPropertyEvaluator(key, {
      value: symbol,
      writable: false,
      enumerable: false,
      configurable: false,
    });
  }

  yield* applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
