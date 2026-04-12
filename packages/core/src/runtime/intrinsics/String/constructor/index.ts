import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsPlainObject } from "../../../types/StaticJsPlainObject.js";

import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsStringBoxed } from "../../../types/implementation/primitives/StaticJsStringBoxed.js";

import toString from "../../../algorithms/to-string.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import stringCtorFromCharCodeDeclaration from "./fromCharCode.js";
import { isStaticJsSymbol } from "../../../types/StaticJsSymbol.js";

const declarations: IntrinsicPropertyDeclaration[] = [stringCtorFromCharCodeDeclaration];

export default function createStringConstructor(
  realm: StaticJsRealm,
  stringProto: StaticJsPlainObject,
) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "String",
    function* (_thisArg, value) {
      if (!value) {
        value = realm.types.string("");
      } else if (isStaticJsSymbol(value)) {
        // SymbolDescribeString
        let desc = value.description ?? "";
        return realm.types.string(`Symbol(${desc})`);
      }

      return yield* toString(value);
    },
    {
      *construct(_thisArg, value) {
        const str = yield* toString.js(value ?? realm.types.string(""));
        return new StaticJsStringBoxed(realm, str);
      },
    },
  );

  ctor.defineOwnPropertySync("prototype", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: stringProto,
  });
  stringProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
