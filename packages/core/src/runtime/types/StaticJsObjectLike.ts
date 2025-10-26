import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import type { StaticJsPropertyDescriptor } from "./StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import { isStaticJsValue } from "./StaticJsValue.js";
import type { StaticJsSymbol } from "./StaticJsSymbol.js";

export type StaticJsObjectPropertyKey = string | StaticJsSymbol;

export interface StaticJsObjectLike extends StaticJsPrimitive {
  // We MUST NOT RESTRICT THIS to "object" | "array" | "function", or else
  // type guards for those specific types will include this, even if we use
  // explicit x is y type guards.
  readonly runtimeTypeOf: string;

  get prototype(): StaticJsObjectLike | null;

  get extensible(): boolean;

  setPrototypeOfSync(prototype: StaticJsObjectLike | null): void;

  setPrototypeOfEvaluator(
    prototype: StaticJsObjectLike | null,
  ): EvaluationGenerator;

  preventExtensionsSync(): void;

  preventExtensionsEvaluator(): EvaluationGenerator<void>;

  /**
   * Gets all property keys, including non-enumerable and inherited ones.
   * Excludes symbol keys.
   */
  getKeysSync(): string[];

  /**
   * Gets an evaluator to get all property keys, including non-enumerable and inherited ones.
   * Excludes symbol keys.
   */
  getKeysEvaluator(): EvaluationGenerator<string[]>;

  getEnumerableKeysSync(): string[];
  getEnumerableKeysEvaluator(): EvaluationGenerator<string[]>;

  getOwnKeysSync(): string[];
  getOwnKeysEvaluator(): EvaluationGenerator<string[]>;

  getOwnSymbolsSync(): StaticJsSymbol[];
  getOwnSymbolsEvaluator(): EvaluationGenerator<StaticJsSymbol[]>;

  getOwnEnumerableKeysSync(): string[];
  getOwnEnumerableKeysEvaluator(): EvaluationGenerator<string[]>;

  hasPropertySync(key: StaticJsObjectPropertyKey): boolean;
  hasPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean>;

  getPropertyDescriptorSync(
    key: StaticJsObjectPropertyKey,
  ): StaticJsPropertyDescriptor | undefined;
  getPropertyDescriptorEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  getOwnPropertyDescriptorSync(
    key: StaticJsObjectPropertyKey,
  ): StaticJsPropertyDescriptor | undefined;
  getOwnPropertyDescriptorEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  definePropertySync(
    key: StaticJsObjectPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): boolean;
  definePropertyEvaluator(
    key: StaticJsObjectPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean>;

  getPropertySync(name: StaticJsObjectPropertyKey): StaticJsValue;
  getPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsValue>;

  setPropertySync(
    key: StaticJsObjectPropertyKey,
    value: StaticJsValue,
    strict: boolean,
  ): void;
  setPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void>;

  deletePropertySync(key: StaticJsObjectPropertyKey): boolean;
  deletePropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean>;
}

// This is a little bit rediculous.  We should probably just use a flag or something.
const objectLikeRuntimeTypes = [
  "object",
  "array",
  "function",
  "promise",
  "symbol",
  "set",
  "map",
  "iterator",
];
export function isStaticJsObjectLike(
  value: unknown,
): value is StaticJsObjectLike {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return objectLikeRuntimeTypes.includes(value.runtimeTypeOf);
}
