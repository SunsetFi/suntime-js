import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import StaticJsTypeCode from "./StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsMap extends StaticJsObjectLike {
  readonly runtimeTypeOf: "map";

  clearEvaluator(): EvaluationGenerator<void>;

  deleteEvaluator(key: StaticJsValue): EvaluationGenerator<boolean>;

  entriesEvaluator(): EvaluationGenerator<StaticJsValue>;

  forEachEvaluator(
    callback: StaticJsFunction,
    thisArg?: StaticJsValue,
  ): EvaluationGenerator<void>;

  getValueEvaluator(key: StaticJsValue): EvaluationGenerator<StaticJsValue>;

  hasEvaluator(key: StaticJsValue): EvaluationGenerator<boolean>;

  keysEvaluator(): EvaluationGenerator<StaticJsValue>;

  setValueEvaluator(
    key: StaticJsValue,
    value: StaticJsValue,
  ): EvaluationGenerator<void>;

  valuesEvaluator(): EvaluationGenerator<StaticJsValue>;

  sizeEvaluator(): EvaluationGenerator<number>;
}

export function isStaticJsMap(value: unknown): value is StaticJsMap {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return value.runtimeTypeCode === StaticJsTypeCode.Map;
}
