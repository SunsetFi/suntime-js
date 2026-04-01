import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRunTaskOptions } from "../tasks/StaticJsRunTaskOptions.js";

import type { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import type { StaticJsPropertyDescriptor } from "./StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import { isStaticJsValue } from "./StaticJsValue.js";
import type { StaticJsSymbol } from "./StaticJsSymbol.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";

export type StaticJsPropertyKey = string | StaticJsSymbol;

export function isStaticJsPropertyKey(value: unknown): value is StaticJsPropertyKey {
  return (
    typeof value === "string" ||
    (isStaticJsValue(value) && value.runtimeTypeCode === StaticJsTypeCode.Symbol)
  );
}

export interface StaticJsObjectLike extends StaticJsPrimitive {
  // We MUST NOT RESTRICT THIS to "object" | "array" | "function", or else
  // type guards for those specific types will include this, even if we use
  // explicit x is y type guards.
  readonly runtimeTypeOf: string;

  get prototype(): StaticJsObjectLike | null;

  getPrototypeOfAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsObjectLike | null>;
  getPrototypeOfSync(opts?: StaticJsRunTaskOptions): StaticJsObjectLike | null;
  getPrototypeOfEvaluator(): EvaluationGenerator<StaticJsObjectLike | null>;

  setPrototypeOfAsync(
    prototype: StaticJsObjectLike | null,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean>;
  setPrototypeOfSync(prototype: StaticJsObjectLike | null, opts?: StaticJsRunTaskOptions): boolean;
  setPrototypeOfEvaluator(prototype: StaticJsObjectLike | null): EvaluationGenerator<boolean>;

  isExtensibleAsync(opts?: StaticJsRunTaskOptions): Promise<boolean>;
  isExtensibleSync(opts?: StaticJsRunTaskOptions): boolean;
  isExtensibleEvaluator(opts?: StaticJsRunTaskOptions): EvaluationGenerator<boolean>;

  preventExtensionsAsync(opts?: StaticJsRunTaskOptions): Promise<boolean>;
  preventExtensionsSync(opts?: StaticJsRunTaskOptions): boolean;
  preventExtensionsEvaluator(): EvaluationGenerator<boolean>;

  ownPropertyKeysAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsPropertyKey[]>;
  ownPropertyKeysSync(opts?: StaticJsRunTaskOptions): StaticJsPropertyKey[];
  ownPropertyKeysEvaluator(): EvaluationGenerator<StaticJsPropertyKey[]>;

  ownEnumerableKeysAsync(opts?: StaticJsRunTaskOptions): Promise<string[]>;
  ownEnumerableKeysSync(opts?: StaticJsRunTaskOptions): string[];
  ownEnumerableKeysEvaluator(): EvaluationGenerator<string[]>;

  hasPropertyAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean>;
  hasPropertySync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean;
  hasPropertyEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean>;

  hasOwnPropertyAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean>;
  hasOwnPropertySync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean;
  hasOwnPropertyEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean>;

  getPropertyAsync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPropertyDescriptor | undefined>;
  getPropertySync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsPropertyDescriptor | undefined;
  getPropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  getOwnPropertyAsync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPropertyDescriptor | undefined>;
  getOwnPropertySync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsPropertyDescriptor | undefined;
  getOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  defineOwnPropertyAsync(
    key: StaticJsPropertyKey,
    descriptor: Partial<StaticJsPropertyDescriptor>,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean>;
  defineOwnPropertySync(
    key: StaticJsPropertyKey,
    descriptor: Partial<StaticJsPropertyDescriptor>,
    opts?: StaticJsRunTaskOptions,
  ): boolean;
  defineOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
    descriptor: Partial<StaticJsPropertyDescriptor>,
  ): EvaluationGenerator<boolean>;

  getAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue>;
  getSync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): StaticJsValue;
  getEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<StaticJsValue>;

  setAsync(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    strict: boolean,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean>;
  setSync(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    strict: boolean,
    opts?: StaticJsRunTaskOptions,
  ): boolean;
  setEvaluator(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<boolean>;

  deleteAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean>;
  deleteSync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean;
  deleteEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean>;
}

export function isStaticJsObjectLike(value: unknown): value is StaticJsObjectLike {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return Boolean(value.runtimeTypeCode & StaticJsTypeCode.IsObjectLikeFlag);
}
