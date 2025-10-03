import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import type { StaticJsPropertyDescriptor } from "./StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import { isStaticJsValue } from "./StaticJsValue.js";

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

  getKeysSync(): string[];
  getKeysEvaluator(): EvaluationGenerator<string[]>;

  getEnumerableKeysSync(): string[];
  getEnumerableKeysEvaluator(): EvaluationGenerator<string[]>;

  getOwnKeysSync(): string[];
  getOwnKeysEvaluator(): EvaluationGenerator<string[]>;

  getOwnEnumerableKeysSync(): string[];
  getOwnEnumerableKeysEvaluator(): EvaluationGenerator<string[]>;

  hasPropertySync(name: string): boolean;
  hasPropertyEvaluator(name: string): EvaluationGenerator<boolean>;

  getPropertyDescriptorSync(
    name: string,
  ): StaticJsPropertyDescriptor | undefined;
  getPropertyDescriptorEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  getOwnPropertyDescriptorSync(
    name: string,
  ): StaticJsPropertyDescriptor | undefined;
  getOwnPropertyDescriptorEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  definePropertySync(
    name: string,
    descriptor: StaticJsPropertyDescriptor,
  ): void;
  definePropertyEvaluator(
    name: string,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<void>;

  getPropertySync(name: string): StaticJsValue;
  getPropertyEvaluator(name: string): EvaluationGenerator<StaticJsValue>;

  setPropertySync(name: string, value: StaticJsValue, strict: boolean): void;
  setPropertyEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void>;

  deletePropertySync(name: string): boolean;
  deletePropertyEvaluator(name: string): EvaluationGenerator<boolean>;
}

export function isStaticJsObjectLike(
  value: unknown,
): value is StaticJsObjectLike {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return ["object", "array", "function", "promise"].includes(
    value.runtimeTypeOf,
  );
}
