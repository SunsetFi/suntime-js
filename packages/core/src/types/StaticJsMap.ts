import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRunTaskOptions } from "#tasks/StaticJsRunTaskOptions.js";

import type { StaticJsCallable } from "./StaticJsCallable.js";
import type { StaticJsIterator } from "./StaticJsIterator.js";
import type { StaticJsObject } from "./StaticJsObject.js";

import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsMap extends StaticJsObject {
  readonly runtimeTypeOf: "map";

  sizeSync(opts?: StaticJsRunTaskOptions): number;
  sizeAsync(opts?: StaticJsRunTaskOptions): Promise<number>;
  sizeEvaluator(): EvaluationGenerator<number>;

  entriesSync(opts?: StaticJsRunTaskOptions): StaticJsIterator;
  entriesAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator>;
  entriesEvaluator(): EvaluationGenerator<StaticJsIterator>;

  keysSync(opts?: StaticJsRunTaskOptions): StaticJsIterator;
  keysAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator>;
  keysEvaluator(): EvaluationGenerator<StaticJsIterator>;

  valuesSync(opts?: StaticJsRunTaskOptions): StaticJsIterator;
  valuesAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator>;
  valuesEvaluator(): EvaluationGenerator<StaticJsIterator>;

  hasSync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean;
  hasAsync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>;
  hasEvaluator(key: StaticJsValue): EvaluationGenerator<boolean>;

  getValueSync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue;
  getValueAsync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue>;
  getValueEvaluator(key: StaticJsValue): EvaluationGenerator<StaticJsValue>;

  setValueSync(key: StaticJsValue, value: StaticJsValue, opts?: StaticJsRunTaskOptions): void;
  setValueAsync(
    key: StaticJsValue,
    value: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): Promise<void>;
  setValueEvaluator(key: StaticJsValue, value: StaticJsValue): EvaluationGenerator<void>;

  deleteValueSync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean;
  deleteValueAsync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>;
  deleteValueEvaluator(key: StaticJsValue): EvaluationGenerator<boolean>;

  clearSync(opts?: StaticJsRunTaskOptions): void;
  clearAsync(opts?: StaticJsRunTaskOptions): Promise<void>;
  clearEvaluator(): EvaluationGenerator<void>;

  forEachSync(
    callback: StaticJsCallable,
    thisArg?: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): void;
  forEachAsync(
    callback: StaticJsCallable,
    thisArg?: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): Promise<void>;
  forEachEvaluator(callback: StaticJsCallable, thisArg?: StaticJsValue): EvaluationGenerator<void>;
}

export function isStaticJsMap(value: unknown): value is StaticJsMap {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return value.runtimeTypeCode === StaticJsTypeCode.Map;
}
