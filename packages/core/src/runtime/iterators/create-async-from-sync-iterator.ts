import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import newPromiseCapability from "../algorithms/new-promise-capability.js";
import call from "../algorithms/call.js";

import iteratorNext from "./iterator-next.js";

import type { IteratorRecord } from "./IteratorRecord.js";
import asyncFromSyncIteratorContinuation from "./async-from-sync-iterator-continuation.js";

export default function* createAsyncFromSyncIterator(
  syncIteratorRecord: IteratorRecord,
  realm: StaticJsRealm,
): EvaluationGenerator<IteratorRecord> {
  const asyncIterator = realm.types.object();

  // TODO: Should be implemented by prototypes.

  yield* asyncIterator.definePropertyEvaluator(
    realm.types.symbols.asyncIterator,
    {
      value: asyncIterator,
      writable: true,
      enumerable: false,
      configurable: true,
    },
  );

  yield* asyncIterator.definePropertyEvaluator("next", {
    value: new StaticJsFunctionImpl(realm, "next", function* (thisArg, value) {
      const promiseCapability = yield* newPromiseCapability(
        realm.types.constructors.Promise,
        realm,
      );
      let result: StaticJsValue;
      try {
        result = yield* iteratorNext(syncIteratorRecord, value ?? null, realm);
      } catch (e) {
        if (e instanceof ThrowCompletion) {
          yield* call(
            promiseCapability.reject,
            realm.types.undefined,
            [e.value],
            realm,
          );
          return promiseCapability.promise;
        }

        throw e;
      }

      return yield* asyncFromSyncIteratorContinuation(
        result,
        promiseCapability,
        syncIteratorRecord,
        true,
        realm,
      );
    }),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  const nextMethod = yield* asyncIterator.getEvaluator("next");

  return {
    iterator: asyncIterator,
    nextMethod,
    done: false,
  };
}
