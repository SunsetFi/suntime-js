import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsCallable } from "../runtime/types/StaticJsCallable.js";
import type {
  StaticJsPromise,
  StaticJsPromiseCapabilityRecord,
} from "../runtime/types/StaticJsPromise.js";

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
