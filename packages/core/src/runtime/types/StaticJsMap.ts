import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsFunction } from "./StaticJsFunction.js";
import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import StaticJsTypeCode from "./StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsMap extends StaticJsObjectLike {
  readonly runtimeTypeOf: "map";

  sizeEvaluator(): EvaluationGenerator<number>;

  entriesEvaluator(): EvaluationGenerator<StaticJsValue>;
  keysEvaluator(): EvaluationGenerator<StaticJsValue>;
  valuesEvaluator(): EvaluationGenerator<StaticJsValue>;

  hasEvaluator(key: StaticJsValue): EvaluationGenerator<boolean>;
  getValueEvaluator(key: StaticJsValue): EvaluationGenerator<StaticJsValue>;

  setValueEvaluator(key: StaticJsValue, value: StaticJsValue): EvaluationGenerator<void>;
  deleteValueEvaluator(key: StaticJsValue): EvaluationGenerator<boolean>;
  clearEvaluator(): EvaluationGenerator<void>;

  forEachEvaluator(callback: StaticJsFunction, thisArg?: StaticJsValue): EvaluationGenerator<void>;
}

export function isStaticJsMap(value: unknown): value is StaticJsMap {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return value.runtimeTypeCode === StaticJsTypeCode.Map;
}
