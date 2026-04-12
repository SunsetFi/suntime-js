import toInteger from "../../../algorithms/to-integer.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import { StaticJsArrayImpl } from "../../../types/implementation/objects/StaticJsArrayImpl.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { isStaticJsNumber } from "../../../types/StaticJsNumber.js";
import type { StaticJsPlainObject } from "../../../types/StaticJsPlainObject.js";

import { applyIntrinsicProperties, type IntrinsicPropertyDeclaration } from "../../utils.js";

import arrayCtorFromDeclaration from "./from.js";
import arrayCtorIsArrayDeclaration from "./isArray.js";
import arrayCtorOfDeclaration from "./of.js";
import arrayCtorSymbolSpeciesDeclaration from "./symbol_species.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  arrayCtorFromDeclaration,
  arrayCtorIsArrayDeclaration,
  arrayCtorOfDeclaration,
  arrayCtorSymbolSpeciesDeclaration,
];

export default function createArrayConstructor(
  realm: StaticJsRealm,
  arrayProto: StaticJsPlainObject,
) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "Array",
    function* (_thisArg, ...args) {
      if (args.length === 1 && isStaticJsNumber(args[0])) {
        const length = yield* toInteger(args[0]);

        const array = yield* StaticJsArrayImpl.create(realm, length.value);
        return array;
      } else {
        const array = yield* StaticJsArrayImpl.create(realm, args);
        return array;
      }
    },
    { construct: true },
  );

  ctor.defineOwnPropertySync("prototype", {
    value: arrayProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  arrayProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
