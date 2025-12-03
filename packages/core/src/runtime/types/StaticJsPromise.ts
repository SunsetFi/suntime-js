import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import StaticJsTypeCode from "./StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsPromiseCapabilityRecord {
  promise: StaticJsPromise;
  resolve: StaticJsFunction;
  reject: StaticJsFunction;
}

export interface StaticJsPromise extends StaticJsObjectLike {
  readonly runtimeTypeOf: "promise";

  resolve(value: StaticJsValue): void;
  reject(reason: StaticJsValue): void;

  thenEvaluator(
    onFulfilled?: StaticJsFunction | undefined,
    onRejected?: StaticJsFunction | undefined,
    resultCapability?: StaticJsPromiseCapabilityRecord | null,
  ): EvaluationGenerator<StaticJsPromise>;

  catchEvaluator(
    func: StaticJsFunction | undefined,
  ): EvaluationGenerator<StaticJsPromise>;

  toJsSync(): Promise<unknown>;
}

export function isStaticJsPromise(value: unknown): value is StaticJsPromise {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return value.runtimeTypeCode === StaticJsTypeCode.Promise;
}
