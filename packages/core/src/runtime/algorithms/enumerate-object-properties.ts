import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";

import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";

import { createIteratorResultObject } from "./create-iterator-result-object.js";

export default function* enumerateObjectProperties(
  obj: StaticJsObjectLike,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  // The spec says that newly added properties are "not guarenteed" to be visited,
  // but the pseudocode does show that it might be a possibility.
  // However, it seems to also indicate that all properties present at the start WILL be enumerated, so
  // to avoid deletions shifting things around, we will just snapshot the keys at each object start.
  let currentObject: StaticJsObjectLike = obj;
  const visited = new Set<string>();
  let currentKeys = yield* currentObject.ownPropertyKeysEvaluator();
  let nextIndex = 0;
  const next = new StaticJsFunctionImpl(realm, "next", function* () {
    while (true) {
      if (nextIndex >= currentKeys.length) {
        // If we've gone past the last key, we need to reset
        if (currentObject.prototype === null) {
          return yield* createIteratorResultObject(
            realm.types.undefined,
            true,
            realm,
          );
        }

        nextIndex = 0;
        currentObject = currentObject.prototype;
        currentKeys = yield* currentObject.ownPropertyKeysEvaluator();
      }

      const key = currentKeys[nextIndex++];
      if (isStaticJsSymbol(key)) {
        continue;
      }

      if (visited.has(key)) {
        continue;
      }

      visited.add(key);

      const desc = yield* currentObject.getOwnPropertyEvaluator(key);
      if (!desc?.enumerable) {
        continue;
      }

      return yield* createIteratorResultObject(
        realm.types.string(key),
        false,
        realm,
      );
    }
  });

  const iterator = realm.types.object();
  yield* iterator.definePropertyEvaluator("next", {
    value: next,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* iterator.definePropertyEvaluator("throw", {
    value: realm.types.null,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* iterator.definePropertyEvaluator("return", {
    value: realm.types.null,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* iterator.definePropertyEvaluator(realm.types.symbols.iterator, {
    value: iterator,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return iterator;
}
