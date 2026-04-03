import { EvaluationContext } from "../../evaluator/EvaluationContext.js";

import { StaticJsNativeFunctionImpl } from "../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { Completion } from "../../evaluator/completions/Completion.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import newPromiseCapability from "../algorithms/new-promise-capability.js";
import call from "../algorithms/call.js";

import { iteratorNext } from "./iterator-next.js";

import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";
import { asyncFromSyncIteratorContinuation } from "./async-from-sync-iterator-continuation.js";

export function* createAsyncFromSyncIterator(
  syncIteratorRecord: StaticJsIteratorRecord,
): EvaluationGenerator<StaticJsIteratorRecord> {
  const { realm } = EvaluationContext.current;
  const asyncIterator = realm.types.object();

  // TODO: Should be implemented by prototypes.

  yield* asyncIterator.defineOwnPropertyEvaluator(realm.types.symbols.asyncIterator, {
    value: asyncIterator,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* asyncIterator.defineOwnPropertyEvaluator("next", {
    value: new StaticJsNativeFunctionImpl(realm, "next", function* (_thisArg, value) {
      const promiseCapability = yield* newPromiseCapability(
        realm.types.constructors.Promise,
        realm,
      );
      let result: StaticJsValue;
      try {
        result = yield* iteratorNext(syncIteratorRecord, value ?? null);
      } catch (e) {
        if (Completion.Throw.is(e)) {
          yield* call(promiseCapability.reject, realm.types.undefined, [e.value]);
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
