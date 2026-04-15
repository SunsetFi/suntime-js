import type { StaticJsRunTaskOptions } from "../tasks/StaticJsRunTaskOptions.js";

import { StaticJsCallable } from "./StaticJsCallable.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsFunction extends StaticJsCallable {
  readonly runtimeTypeOf: "function";

  readonly typeOf: "function";

  readonly strict: boolean;

  getNameAsync(opts?: StaticJsRunTaskOptions): Promise<string>;
  getNameSync(opts?: StaticJsRunTaskOptions): string;

  toNative(): (...args: unknown[]) => unknown;
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

export function isStaticJsBoundFunction(value: unknown): value is StaticJsBoundFunction {
  if (!isStaticJsFunction(value)) {
    return false;
  }
  return "boundTargetFunction" in value;
}
