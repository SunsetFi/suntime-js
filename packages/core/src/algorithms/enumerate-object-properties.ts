import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";

import { createIteratorResultObject } from "#iterators/create-iterator-result-object.js";
import { containerMarkable } from "#memory/implementation/container-markable.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { isStaticJsSymbol } from "#types/StaticJsSymbol.js";

export function* enumerateObjectProperties(
  obj: StaticJsObject,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObject> {
  // The spec says that newly added properties are "not guaranteed" to be visited,
  // but the pseudocode does show that it might be a possibility.
  // However, it seems to also indicate that all properties present at the start WILL be enumerated, so
  // to avoid deletions shifting things around, we will just snapshot the keys at each object start.
  // let currentObject: StaticJsObject = obj;
  const currentObject = containerMarkable(obj);
  const visited = new Set<string>();
  let currentKeys = yield* currentObject.value!.ownPropertyKeysEvaluator();
  let nextIndex = 0;
  const next = new StaticJsNativeFunctionImpl(
    realm,
    "next",
    function* () {
      while (true) {
        if (nextIndex >= currentKeys.length) {
          const prototype = yield* currentObject.value!.getPrototypeOfEvaluator();
          // If we've gone past the last key, we need to reset
          if (prototype === null) {
            return yield* createIteratorResultObject(realm.types.undefined, true, realm);
          }

          nextIndex = 0;
          currentObject.set(prototype);
          currentKeys = yield* currentObject.value!.ownPropertyKeysEvaluator();
        }

        const key = currentKeys[nextIndex++];
        if (isStaticJsSymbol(key)) {
          continue;
        }

        if (visited.has(key)) {
          continue;
        }

        visited.add(key);

        const desc = yield* currentObject.value!.getOwnPropertyEvaluator(key);
        if (!desc?.enumerable) {
          continue;
        }

        return yield* createIteratorResultObject(realm.types.string(key), false, realm);
      }
    },
    {
      markables: [currentObject],
    },
  );

  const iterator = realm.types.object();
  yield* iterator.defineOwnPropertyEvaluator("next", {
    value: next,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* iterator.defineOwnPropertyEvaluator("throw", {
    value: realm.types.null,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* iterator.defineOwnPropertyEvaluator("return", {
    value: realm.types.null,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* iterator.defineOwnPropertyEvaluator(realm.types.symbols.iterator, {
    value: iterator,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return iterator;
}
