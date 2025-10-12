import toInteger from "../../../algorithms/to-integer.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import StaticJsArrayImpl from "../../../types/implementation/StaticJsArrayImpl.js";
import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";
import { isStaticJsNumber } from "../../../types/StaticJsNumber.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../utils.js";

import arrayConstructorFromDeclaration from "./from.js";
import arrayConstructorIsArrayDeclaration from "./isArray.js";
import arrayConstructorOfDeclaration from "./of.js";
import arrayConstructorSymbolSpeciesDeclaration from "./symbol_species.js";

const declarations: IntrinsicPropertyDeclaration[] = [
  arrayConstructorFromDeclaration,
  arrayConstructorIsArrayDeclaration,
  arrayConstructorOfDeclaration,
  arrayConstructorSymbolSpeciesDeclaration,
];

export default function createArrayConstructor(
  realm: StaticJsRealm,
  arrayProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Array",
    function* (_thisArg, ...args) {
      if (args.length === 1 && isStaticJsNumber(args[0])) {
        const length = yield* toInteger(args[0], realm);

        const array = yield* StaticJsArrayImpl.create(realm, length.value);
        return array;
      } else {
        const array = yield* StaticJsArrayImpl.create(realm, args);
        return array;
      }
    },
    { construct: true },
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

  applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
