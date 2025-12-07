import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import StaticJsTypeCode from "./StaticJsTypeCode.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsFunction extends StaticJsObjectLike {
  readonly runtimeTypeOf: "function";

  readonly typeOf: "function";

  readonly isConstructor: boolean;

  readonly strict: boolean;

  callEvaluator(
    thisArg: StaticJsValue,
    ...args: StaticJsValue[]
  ): EvaluationGenerator<StaticJsValue>;
  callAsync(
    thisArg: StaticJsValue,
    ...args: StaticJsValue[]
  ): Promise<StaticJsValue>;
  callSync(thisArg: StaticJsValue, ...args: StaticJsValue[]): StaticJsValue;

  constructEvaluator(
    ...args: StaticJsValue[]
  ): EvaluationGenerator<StaticJsValue>;

  constructAsync(...args: StaticJsValue[]): Promise<StaticJsValue>;
  constructSync(...args: StaticJsValue[]): StaticJsValue;

  toJsSync(): (...args: unknown[]) => unknown;
}

export interface StaticJsBoundFunction extends StaticJsFunction {
  boundTargetFunction: StaticJsFunction;
}

export function isStaticJsFunction(value: unknown): value is StaticJsFunction {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.Function;
}

export function isStaticJsBoundFunction(
  value: unknown,
): value is StaticJsBoundFunction {
  if (!isStaticJsFunction(value)) {
    return false;
  }
  return "boundTargetFunction" in value;
}
