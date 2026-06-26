import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRunTaskOptions } from "#tasks/StaticJsRunTaskOptions.js";

import type { StaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsIterator } from "./StaticJsIterator.js";
import type { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsSet extends StaticJsObject {
  readonly runtimeTypeOf: "set";

  sizeSync(opts?: StaticJsRunTaskOptions): number;
  sizeAsync(opts?: StaticJsRunTaskOptions): Promise<number>;
  sizeEvaluator(): EvaluationGenerator<number>;

  keysSync(opts?: StaticJsRunTaskOptions): StaticJsIterator;
  keysAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator>;
  keysEvaluator(): EvaluationGenerator<StaticJsIterator>;

  valuesSync(opts?: StaticJsRunTaskOptions): StaticJsIterator;
  valuesAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator>;
  valuesEvaluator(): EvaluationGenerator<StaticJsIterator>;

  entriesSync(opts?: StaticJsRunTaskOptions): StaticJsIterator;
  entriesAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator>;
  entriesEvaluator(): EvaluationGenerator<StaticJsIterator>;

  hasSync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean;
  hasAsync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>;
  hasEvaluator(value: StaticJsValue): EvaluationGenerator<boolean>;

  addValueSync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): void;
  addValueAsync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<void>;
  addValueEvaluator(value: StaticJsValue): EvaluationGenerator<void>;

  deleteValueSync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean;
  deleteValueAsync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>;
  deleteValueEvaluator(value: StaticJsValue): EvaluationGenerator<boolean>;

  clearSync(opts?: StaticJsRunTaskOptions): void;
  clearAsync(opts?: StaticJsRunTaskOptions): Promise<void>;
  clearEvaluator(): EvaluationGenerator<void>;

  forEachSync(
    callback: StaticJsFunction,
    thisArg?: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): void;
  forEachAsync(
    callback: StaticJsFunction,
    thisArg?: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): Promise<void>;
  forEachEvaluator(callback: StaticJsFunction, thisArg?: StaticJsValue): EvaluationGenerator<void>;

  differenceSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue;
  differenceAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue>;
  differenceEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue>;

  intersectionSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue;
  intersectionAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue>;
  intersectionEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue>;

  isDisjointFromSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean;
  isDisjointFromAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>;
  isDisjointFromEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean>;

  isSubsetOfSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean;
  isSubsetOfAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>;
  isSubsetOfEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean>;

  isSupersetOfSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean;
  isSupersetOfAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean>;
  isSupersetOfEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean>;

  symmetricDifferenceSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue;
  symmetricDifferenceAsync(
    otherSet: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue>;
  symmetricDifferenceEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue>;

  unionSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue;
  unionAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue>;
  unionEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue>;
}

export function isStaticJsSet(value: unknown): value is StaticJsSet {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.Set;
}
