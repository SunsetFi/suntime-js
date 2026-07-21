import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRunTaskOptions } from "#tasks/StaticJsRunTaskOptions.js";

import type { StaticJsCallable } from "./StaticJsCallable.js";
import type { StaticJsObject } from "./StaticJsObject.js";

import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsPromiseCapabilityRecord {
  promise: StaticJsPromise;
  resolve: StaticJsCallable;
  reject: StaticJsCallable;
}

export interface StaticJsPromise extends StaticJsObject {
  readonly runtimeTypeOf: "promise";

  readonly promiseState: "pending" | "fulfilled" | "rejected";
  readonly promiseResult: StaticJsValue | null;

  markRejectionHandled(): void;

  resolve(value: StaticJsValue): void;
  reject(reason: StaticJsValue): void;

  thenSync(
    onFulfilled?: StaticJsCallable | undefined,
    onRejected?: StaticJsCallable | undefined,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsPromise;
  thenAsync(
    onFulfilled?: StaticJsCallable | undefined,
    onRejected?: StaticJsCallable | undefined,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPromise>;
  thenEvaluator(
    onFulfilled?: StaticJsCallable | undefined,
    onRejected?: StaticJsCallable | undefined,
    resultCapability?: StaticJsPromiseCapabilityRecord | true,
  ): EvaluationGenerator<StaticJsPromise>;
  thenEvaluator(
    onFulfilled: StaticJsCallable | undefined,
    onRejected: StaticJsCallable | undefined,
    resultCapability: false,
  ): EvaluationGenerator<void>;

  catchSync(func: StaticJsCallable | undefined, opts?: StaticJsRunTaskOptions): StaticJsPromise;
  catchAsync(
    func: StaticJsCallable | undefined,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPromise>;
  catchEvaluator(func: StaticJsCallable | undefined): EvaluationGenerator<StaticJsPromise>;

  toNative(): Promise<unknown>;
}

export function isStaticJsPromise(value: unknown): value is StaticJsPromise {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return value.runtimeTypeCode === StaticJsTypeCode.Promise;
}
