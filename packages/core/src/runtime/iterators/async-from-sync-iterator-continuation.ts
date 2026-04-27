import { Completion } from "../../evaluator/completions/Completion.js";
import { Q } from "../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { call } from "../algorithms/call.js";
import { promiseResolve } from "../algorithms/promise-resolve.js";
import { createIteratorResultObject } from "../iterators/create-iterator-result-object.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { StaticJsNativeFunctionImpl } from "../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import type { StaticJsFunction } from "../types/StaticJsFunction.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsPromise, StaticJsPromiseCapabilityRecord } from "../types/StaticJsPromise.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { iteratorClose } from "./iterator-close.js";
import { iteratorComplete } from "./iterator-complete.js";
import { iteratorValue } from "./iterator-value.js";
import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export function* asyncFromSyncIteratorContinuation(
  result: StaticJsObject,
  promiseCapability: StaticJsPromiseCapabilityRecord,
  syncIteratorRecord: StaticJsIteratorRecord,
  closeOnRejection: boolean,
  realm?: StaticJsRealm,
): EvaluationGenerator<StaticJsPromise> {
  realm ??= EvaluationContext.current.realm;

  let done: boolean;
  let value: StaticJsValue;
  try {
    done = yield* iteratorComplete(result);
    value = yield* iteratorValue(result);
  } catch (e) {
    if (Completion.Throw.is(e)) {
      yield* call(promiseCapability.reject, realm.types.undefined, [e.value]);
      return promiseCapability.promise;
    }

    throw e;
  }

  let valueWrapper: StaticJsPromise;
  try {
    valueWrapper = yield* promiseResolve(realm.types.constructors.Promise, value, realm);
  } catch (e) {
    if (Completion.Throw.is(e)) {
      let completion = e;
      if (!done && closeOnRejection) {
        completion = yield* iteratorClose(syncIteratorRecord, e);
      }

      yield* call(promiseCapability.reject, realm.types.undefined, [completion.value]);
      return promiseCapability.promise;
    }

    throw e;
  }

  const onFulfilled = new StaticJsNativeFunctionImpl(realm, "", function* (_thisArg, v) {
    return yield* createIteratorResultObject(v, done, realm);
  });

  let onRejected: StaticJsFunction | undefined;
  if (!done && closeOnRejection) {
    onRejected = new StaticJsNativeFunctionImpl(realm, "", function* (_thisArg, e) {
      return yield* Q(iteratorClose(syncIteratorRecord, Completion.Throw(e)));
    });
  }

  yield* valueWrapper.thenEvaluator(onFulfilled, onRejected, promiseCapability);
  return promiseCapability.promise;
}
