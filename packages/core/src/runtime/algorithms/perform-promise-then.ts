import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsCallable } from "../types/StaticJsCallable.js";
import { StaticJsPromise, StaticJsPromiseCapabilityRecord } from "../types/StaticJsPromise.js";

export function* performPromiseThen(
  promise: StaticJsPromise,
  onFulfilled: StaticJsCallable,
  onRejected: StaticJsCallable | undefined,
  resultCapability?: StaticJsPromiseCapabilityRecord,
): EvaluationGenerator<void> {
  if (resultCapability) {
    yield* promise.thenEvaluator(onFulfilled, onRejected, resultCapability);
  } else {
    yield* promise.thenEvaluator(onFulfilled, onRejected, false);
  }
}
