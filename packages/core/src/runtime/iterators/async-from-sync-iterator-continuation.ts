import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";
import type {
  StaticJsPromise,
  StaticJsPromiseCapabilityRecord,
} from "../types/StaticJsPromise.js";
import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsFunction } from "../types/StaticJsFunction.js";

import StaticJsFunctionImpl from "../types/implementation/StaticJsFunctionImpl.js";

import call from "../algorithms/call.js";
import { createIteratorResultObject } from "../algorithms/create-iterator-result-object.js";
import promiseResolve from "../algorithms/promise-resolve.js";

import type { IteratorRecord } from "./IteratorRecord.js";
import { iteratorComplete } from "./iterator-complete.js";
import iteratorValue from "./iterator-value.js";
import iteratorClose from "./iterator-close.js";

export default function* asyncFromSyncIteratorContinuation(
  result: StaticJsObjectLike,
  promiseCapability: StaticJsPromiseCapabilityRecord,
  syncIteratorRecord: IteratorRecord,
  closeOnRejection: boolean,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsPromise> {
  let done: boolean;
  let value: StaticJsValue;
  try {
    done = yield* iteratorComplete(result, realm);
    value = yield* iteratorValue(result);
  } catch (e) {
    if (Completion.Throw.is(e)) {
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

  let valueWrapper: StaticJsPromise;
  try {
    valueWrapper = yield* promiseResolve(value, realm);
  } catch (e) {
    if (Completion.Throw.is(e)) {
      let completion = e;
      if (!done && closeOnRejection) {
        completion = (yield* iteratorClose(
          syncIteratorRecord,
          e,
          realm,
          false,
        )) as Completion.Throw;
      }

      yield* call(
        promiseCapability.reject,
        realm.types.undefined,
        [completion.value],
        realm,
      );
      return promiseCapability.promise;
    }

    throw e;
  }

  const onFulfilled = new StaticJsFunctionImpl(realm, "", function* (
    _thisArg,
    v,
  ) {
    return yield* createIteratorResultObject(v, done, realm);
  });

  let onRejected: StaticJsFunction | undefined;
  if (!done && closeOnRejection) {
    onRejected = new StaticJsFunctionImpl(realm, "", function* (_thisArg, e) {
      yield* iteratorClose(syncIteratorRecord, Completion.Throw(e), realm);
      return realm.types.undefined;
    });
  }

  yield* valueWrapper.thenEvaluator(onFulfilled, onRejected, promiseCapability);
  return promiseCapability.promise;
}
