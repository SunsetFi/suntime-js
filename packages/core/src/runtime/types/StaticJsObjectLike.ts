import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRunTaskOptions } from "../tasks/StaticJsRunTaskOptions.js";

import type { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import type { StaticJsPropertyDescriptor } from "./StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import { isStaticJsValue } from "./StaticJsValue.js";
import type { StaticJsSymbol } from "./StaticJsSymbol.js";
import StaticJsTypeCode from "./StaticJsTypeCode.js";

export type StaticJsObjectPropertyKey = string | StaticJsSymbol;

export function isStaticJsObjectPropertyKey(
  value: unknown,
): value is StaticJsObjectPropertyKey {
  return (
    typeof value === "string" ||
    (isStaticJsValue(value) &&
      value.runtimeTypeCode === StaticJsTypeCode.Symbol)
  );
}

export interface StaticJsObjectLike extends StaticJsPrimitive {
  // We MUST NOT RESTRICT THIS to "object" | "array" | "function", or else
  // type guards for those specific types will include this, even if we use
  // explicit x is y type guards.
  readonly runtimeTypeOf: string;

  get prototype(): StaticJsObjectLike | null;

  get extensible(): boolean;

  setPrototypeOfAsync(
    prototype: StaticJsObjectLike | null,
    opts?: StaticJsRunTaskOptions,
  ): Promise<void>;
  setPrototypeOfSync(prototype: StaticJsObjectLike | null): void;
  setPrototypeOfEvaluator(
    prototype: StaticJsObjectLike | null,
  ): EvaluationGenerator<void>;

  preventExtensionsAsync(opts?: StaticJsRunTaskOptions): Promise<void>;
  preventExtensionsSync(): void;
  preventExtensionsEvaluator(): EvaluationGenerator<void>;

  ownPropertyKeysAsync(
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsObjectPropertyKey[]>;
  ownPropertyKeysSync(): StaticJsObjectPropertyKey[];
  ownPropertyKeysEvaluator(): EvaluationGenerator<StaticJsObjectPropertyKey[]>;

  ownEnumerableKeysAsync(opts?: StaticJsRunTaskOptions): Promise<string[]>;
  ownEnumerableKeysSync(): string[];
  ownEnumerableKeysEvaluator(): EvaluationGenerator<string[]>;

  hasPropertyAsync(
    key: StaticJsObjectPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean>;
  hasPropertySync(key: StaticJsObjectPropertyKey): boolean;
  hasPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean>;

  hasOwnPropertyAsync(
    key: StaticJsObjectPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean>;
  hasOwnPropertySync(key: StaticJsObjectPropertyKey): boolean;
  hasOwnPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean>;

  getPropertyAsync(
    key: StaticJsObjectPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPropertyDescriptor | undefined>;
  getPropertySync(
    key: StaticJsObjectPropertyKey,
  ): StaticJsPropertyDescriptor | undefined;
  getPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  getOwnPropertyAsync(
    key: StaticJsObjectPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPropertyDescriptor | undefined>;
  getOwnPropertySync(
    key: StaticJsObjectPropertyKey,
  ): StaticJsPropertyDescriptor | undefined;
  getOwnPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  defineOwnPropertyAsync(
    key: StaticJsObjectPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean>;
  defineOwnPropertySync(
    key: StaticJsObjectPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): boolean;
  defineOwnPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean>;

  getAsync(
    name: StaticJsObjectPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue>;
  getSync(name: StaticJsObjectPropertyKey): StaticJsValue;
  getEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsValue>;

  setAsync(
    key: StaticJsObjectPropertyKey,
    value: StaticJsValue,
    strict: boolean,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean>;
  setSync(
    key: StaticJsObjectPropertyKey,
    value: StaticJsValue,
    strict: boolean,
  ): boolean;
  setEvaluator(
    key: StaticJsObjectPropertyKey,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<boolean>;

  deleteAsync(
    key: StaticJsObjectPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean>;
  deleteSync(key: StaticJsObjectPropertyKey): boolean;
  deleteEvaluator(key: StaticJsObjectPropertyKey): EvaluationGenerator<boolean>;
}

export function isStaticJsObjectLike(
  value: unknown,
): value is StaticJsObjectLike {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return Boolean(value.runtimeTypeCode & StaticJsTypeCode.IsObjectLikeFlag);
}
