import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../types/StaticJsObject.js";
import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";

import type { IntrinsicSymbols, Prototypes } from "./intrinsics.js";

export function populateIteratorPrototype(
  realm: StaticJsRealm,
  iteratorProto: StaticJsObject,
  prototypes: Prototypes,
  symbols: IntrinsicSymbols,
) {
  const iteratorFunc = new StaticJsFunctionImpl(
    realm,
    "Symbol(iterator)",
    function* (thisArg) {
      return thisArg;
    },
    { prototype: prototypes.functionProto },
  );

  iteratorProto.definePropertySync(symbols.iterator, {
    value: iteratorFunc,
    writable: true,
    enumerable: false,
    configurable: true,
  });
}
