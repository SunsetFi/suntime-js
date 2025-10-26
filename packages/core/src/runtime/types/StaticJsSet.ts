import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import StaticJsTypeCode from "./StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsSet extends StaticJsObjectLike {
  readonly runtimeTypeOf: "set";

  addEvaluator(value: StaticJsValue): EvaluationGenerator<void>;
  clearEvaluator(value: StaticJsValue): EvaluationGenerator<void>;
  deleteEvaluator(value: StaticJsValue): EvaluationGenerator<boolean>;
  differenceEvaluator(
    otherSet: StaticJsValue,
  ): EvaluationGenerator<StaticJsValue>;
  entriesEvaluator(): EvaluationGenerator<StaticJsValue>;
  forEachEvaluator(
    callback: StaticJsFunction,
    thisArg?: StaticJsValue,
  ): EvaluationGenerator<void>;
  hasEvaluator(value: StaticJsValue): EvaluationGenerator<boolean>;
  intersectionEvaluator(
    otherSet: StaticJsValue,
  ): EvaluationGenerator<StaticJsValue>;
  isDisjointFromEvaluator(
    otherSet: StaticJsValue,
  ): EvaluationGenerator<boolean>;
  isSubsetOfEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean>;
  isSupersetOfEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean>;
  keysEvaluator(): EvaluationGenerator<StaticJsValue>;
  symmetricDifferenceEvaluator(
    otherSet: StaticJsValue,
  ): EvaluationGenerator<StaticJsValue>;
  unionEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue>;
  valuesEvaluator(): EvaluationGenerator<StaticJsValue>;

  sizeEvaluator(): EvaluationGenerator<number>;
}

export function isStaticJsSet(value: unknown): value is StaticJsSet {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.Set;
}
