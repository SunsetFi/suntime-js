import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import StaticJsTypeCode from "./StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsSet extends StaticJsObjectLike {
  readonly runtimeTypeOf: "set";

  sizeEvaluator(): EvaluationGenerator<number>;

  keysEvaluator(): EvaluationGenerator<StaticJsValue>;
  valuesEvaluator(): EvaluationGenerator<StaticJsValue>;
  entriesEvaluator(): EvaluationGenerator<StaticJsValue>;

  hasEvaluator(value: StaticJsValue): EvaluationGenerator<boolean>;

  addValueEvaluator(value: StaticJsValue): EvaluationGenerator<void>;
  deleteValueEvaluator(value: StaticJsValue): EvaluationGenerator<boolean>;
  clearEvaluator(): EvaluationGenerator<void>;

  forEachEvaluator(callback: StaticJsFunction, thisArg?: StaticJsValue): EvaluationGenerator<void>;

  differenceEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue>;

  intersectionEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue>;
  isDisjointFromEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean>;
  isSubsetOfEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean>;
  isSupersetOfEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean>;
  symmetricDifferenceEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue>;
  unionEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue>;
}

export function isStaticJsSet(value: unknown): value is StaticJsSet {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.Set;
}
