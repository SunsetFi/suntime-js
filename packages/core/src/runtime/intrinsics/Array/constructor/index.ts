import toInteger from "../../../algorithms/to-integer.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import StaticJsArrayImpl from "../../../types/implementation/StaticJsArrayImpl.js";
import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";
import { isStaticJsNumber } from "../../../types/StaticJsNumber.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import type { IntrinsicSymbols, Prototypes } from "../../intrinsics.js";

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
  prototypes: Prototypes,
  symbols: IntrinsicSymbols,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Array",
    function* (_thisArg, ...args) {
      if (args.length === 1 && isStaticJsNumber(args[0])) {
        const length = yield* toInteger(args[0], realm);

        const array = new StaticJsArrayImpl(realm);

        yield* array.setPropertyEvaluator("length", length, false);
        return array;
      } else {
        const array = new StaticJsArrayImpl(realm, args);
        return array;
      }
    },
    { prototype: prototypes.functionProto, isConstructor: true },
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

  applyIntrinsicProperties(realm, ctor, declarations, prototypes, symbols);

  return ctor;
}
