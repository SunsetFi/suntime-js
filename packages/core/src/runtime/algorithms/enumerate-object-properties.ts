import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";

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
  let currentKeys = yield* currentObject.getOwnKeysEvaluator();
  let nextIndex = 0;
  const next = new StaticJsFunctionImpl(realm, "next", function* () {
    while (true) {
      if (nextIndex >= currentKeys.length) {
        // If we've gone past the last key, we need to reset
        if (currentObject.prototype === null) {
          return realm.types.object({
            done: {
              value: realm.types.true,
              writable: false,
              enumerable: false,
              configurable: true,
            },
            value: {
              value: realm.types.undefined,
              writable: false,
              enumerable: false,
              configurable: true,
            },
          });
        }

        nextIndex = 0;
        currentObject = currentObject.prototype;
        currentKeys = yield* currentObject.getOwnKeysEvaluator();
      }

      const key = currentKeys[nextIndex++];
      if (visited.has(key)) {
        continue;
      }

      visited.add(key);

      const desc = yield* currentObject.getOwnPropertyDescriptorEvaluator(key);
      if (!desc?.enumerable) {
        continue;
      }

      return realm.types.object({
        done: {
          value: realm.types.false,
          writable: false,
          enumerable: false,
          configurable: true,
        },
        value: {
          value: realm.types.string(key),
          writable: false,
          enumerable: false,
          configurable: true,
        },
      });
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
