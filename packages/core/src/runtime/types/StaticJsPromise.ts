import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsPromise extends StaticJsObjectLike {
  readonly runtimeTypeOf: "promise";

  resolve(value: StaticJsValue): void;
  reject(reason: StaticJsValue): void;

  thenEvaluator(
    onFulfilled?: StaticJsFunction | undefined,
    onRejected?: StaticJsFunction | undefined,
  ): EvaluationGenerator<StaticJsPromise>;

  catchEvaluator(
    func: StaticJsFunction | undefined,
  ): EvaluationGenerator<StaticJsPromise>;
}

export function isStaticJsPromise(value: unknown): value is StaticJsPromise {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return value.runtimeTypeOf === "promise";
}
