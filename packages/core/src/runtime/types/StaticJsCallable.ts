import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsRunTaskOptions } from "../tasks/StaticJsRunTaskOptions.js";
import { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsCallable extends StaticJsObjectLike {
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

  constructAsync(args?: StaticJsValue[], opts?: StaticJsRunTaskOptions): Promise<StaticJsValue>;
  constructSync(args?: StaticJsValue[], opts?: StaticJsRunTaskOptions): StaticJsValue;
  constructEvaluator(
    args?: StaticJsValue[],
    newTarget?: StaticJsCallable,
  ): EvaluationGenerator<StaticJsObjectLike>;
}
export function isStaticJsCallable(value: unknown): value is StaticJsCallable {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return Boolean(value.runtimeTypeCode & StaticJsTypeCode.IsCallableFlag);
}
