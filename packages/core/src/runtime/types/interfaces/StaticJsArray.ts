import { EvaluationGenerator } from "../../../evaluator/internal.js";
import { StaticJsObject } from "./StaticJsObject.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsArray extends StaticJsObject {
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

  pushEvaluator(value: StaticJsValue): EvaluationGenerator<number>;
  popEvaluator(): EvaluationGenerator<StaticJsValue>;
  shiftEvaluator(): EvaluationGenerator<StaticJsValue>;
  unshiftEvaluator(value: StaticJsValue): EvaluationGenerator<number>;
  spliceEvaluator(
    start: number,
    deleteCount: number,
    ...items: StaticJsValue[]
  ): EvaluationGenerator<StaticJsArray>;
  sliceEvaluator(
    start?: number,
    end?: number,
  ): EvaluationGenerator<StaticJsArray>;
}

export function isStaticJsArray(value: unknown): value is StaticJsArray {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "array";
}
