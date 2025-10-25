import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";
import StaticJsIteratorImpl from "../types/implementation/StaticJsIteratorImpl.js";

export function populateIteratorPrototype(
  realm: StaticJsRealm,
  iteratorProto: StaticJsObject,
) {
  iteratorProto.definePropertySync(realm.types.symbols.iterator, {
    writable: true,
    enumerable: false,
    configurable: true,
    value: new StaticJsFunctionImpl(realm, "Symbol(iterator)", function* (
      thisArg,
    ) {
      return thisArg;
    }),
  });

  iteratorProto.definePropertySync("next", {
    writable: true,
    enumerable: false,
    configurable: true,
    value: new StaticJsFunctionImpl(realm, "next", function* (
      thisArg: StaticJsValue,
    ) {
      if (thisArg instanceof StaticJsIteratorImpl === false) {
        throw realm.types.error("TypeError", "Not an iterator");
      }

      return yield* thisArg.nextEvaluator();
    }),
  });
}

export function createIteratorConstructor(
  realm: StaticJsRealm,
  iteratorProto: StaticJsObject,
) {
  // TODO: This should be an abstract class and be extensible
  const ctor = new StaticJsFunctionImpl(realm, "Iterator", function* () {
    throw realm.types.error(
      "TypeError",
      "Iterator constructor cannot be called",
    );
  });

  ctor.definePropertySync("prototype", {
    writable: false,
    enumerable: false,
    configurable: false,
    value: iteratorProto,
  });
  iteratorProto.definePropertySync("constructor", {
    writable: true,
    enumerable: false,
    configurable: true,
    value: ctor,
  });

  return ctor;
}
