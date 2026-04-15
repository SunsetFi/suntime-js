import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../../types/StaticJsObject.js";

import { arrayCreate } from "../../../algorithms/array-create.js";
import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { toInteger } from "../../../algorithms/to-integer.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { isStaticJsNumber } from "../../../types/StaticJsNumber.js";
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

export default function createArrayConstructor(realm: StaticJsRealm, arrayProto: StaticJsObject) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "Array",
    function* (_thisArg, ...args) {
      if (args.length === 1 && isStaticJsNumber(args[0])) {
        const length = yield* toInteger(args[0]);

        const array = yield* arrayCreate(length.value);
        return array;
      } else {
        const array = yield* createArrayFromList(args);
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
