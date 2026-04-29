import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsRunTaskOptions } from "../tasks/StaticJsRunTaskOptions.js";

import { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsCallable extends StaticJsObject {
  get isConstructor(): boolean;

  callAsync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue>;
  callSync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): StaticJsValue;
  callEvaluator(thisArg: StaticJsValue, args?: StaticJsValue[]): EvaluationGenerator<StaticJsValue>;

  constructAsync(
    args?: StaticJsValue[],
    newTarget?: StaticJsCallable,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsObject>;
  constructSync(
    args?: StaticJsValue[],
    newTarget?: StaticJsCallable,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsObject;
  constructEvaluator(
    args?: StaticJsValue[],
    newTarget?: StaticJsCallable,
  ): EvaluationGenerator<StaticJsObject>;
}
export function isStaticJsCallable(value: unknown): value is StaticJsCallable {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return Boolean(value.runtimeTypeCode & StaticJsTypeCode.IsCallableFlag);
}
