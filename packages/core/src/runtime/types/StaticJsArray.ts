import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import StaticJsTypeCode from "./StaticJsTypeCode.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export const MAX_ARRAY_LENGTH_INCLUSIVE = 2 ** 53 - 1;

export interface StaticJsArray extends StaticJsObjectLike {
  readonly runtimeTypeOf: "array";

  getLengthEvaluator(): EvaluationGenerator<number>;
  getEvaluator(index: number): EvaluationGenerator<StaticJsValue>;
  setEvaluator(index: number, value: StaticJsValue): EvaluationGenerator<void>;
}

export function isStaticJsArray(value: unknown): value is StaticJsArray {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.Array;
}
