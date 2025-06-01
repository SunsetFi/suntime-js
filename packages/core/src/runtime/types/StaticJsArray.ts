import EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import { StaticJsObjectLike } from "./StaticJsObject.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export const MAX_ARRAY_LENGTH = 2 ** 53 - 1;

export interface StaticJsArray extends StaticJsObjectLike {
  readonly runtimeTypeOf: "array";

  getLengthEvaluator(): EvaluationGenerator<number>;
  getEvaluator(index: number): EvaluationGenerator<StaticJsValue>;
  setEvaluator(index: number, value: StaticJsValue): EvaluationGenerator<void>;

  sliceEvaluator(
    start?: number,
    end?: number,
  ): EvaluationGenerator<StaticJsArray>;
  sliceNativeEvaluator(
    start?: number,
    end?: number,
  ): EvaluationGenerator<StaticJsValue[]>;
}

export function isStaticJsArray(value: unknown): value is StaticJsArray {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "array";
}
