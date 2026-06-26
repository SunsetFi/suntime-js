import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRunTaskOptions } from "#tasks/StaticJsRunTaskOptions.js";

import type { StaticJsObject } from "./StaticJsObject.js";
import type { StaticJsToNativeOpts } from "./StaticJsToNativeOpts.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

/**
 * Options for converting a callable to its native (host) function bridge via
 * {@link StaticJsCallable.toNative}.
 *
 * For callables, {@link StaticJsToNativeOpts.access} additionally governs the
 * `this` and arguments handed back to the function when the native bridge is
 * invoked, so a sandbox function passed into host code can keep an inherited
 * access level on its callback boundary instead of collapsing to the realm
 * defaults.
 */
export type StaticJsCallableToNativeOpts = StaticJsToNativeOpts;

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

  // Callables (functions, proxies) accept a host-access policy when bridged to
  // native. Concrete function interfaces narrow the return to `Function`;
  // proxies keep the broader `unknown` since their native form need not be one.
  toNative(opts?: StaticJsCallableToNativeOpts): unknown;
}
export function isStaticJsCallable(value: unknown): value is StaticJsCallable {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return Boolean(value.runtimeTypeCode & StaticJsTypeCode.IsCallableFlag);
}
