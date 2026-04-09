import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsCallable } from "./StaticJsCallable.js";
import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsPromiseCapabilityRecord {
  promise: StaticJsPromise;
  resolve: StaticJsCallable;
  reject: StaticJsCallable;
}

export interface StaticJsPromise extends StaticJsObjectLike {
  readonly runtimeTypeOf: "promise";

  resolve(value: StaticJsValue): void;
  reject(reason: StaticJsValue): void;

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

  catchEvaluator(func: StaticJsCallable | undefined): EvaluationGenerator<StaticJsPromise>;

  toNative(): Promise<unknown>;
}

export function isStaticJsPromise(value: unknown): value is StaticJsPromise {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return value.runtimeTypeCode === StaticJsTypeCode.Promise;
}
