import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../types/StaticJsObject.js";
import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";

export function populateIteratorPrototype(
  realm: StaticJsRealm,
  iteratorProto: StaticJsObject,
) {
  const iteratorFunc = new StaticJsFunctionImpl(
    realm,
    "Symbol(iterator)",
    function* (thisArg) {
      return thisArg;
    },
  );

  iteratorProto.definePropertySync(realm.types.symbols.iterator, {
    value: iteratorFunc,
    writable: true,
    enumerable: false,
    configurable: true,
  });
}
