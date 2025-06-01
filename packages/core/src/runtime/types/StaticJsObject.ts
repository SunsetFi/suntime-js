import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import type { StaticJsPropertyDescriptor } from "./StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "./StaticJsValue.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsObjectLike extends StaticJsPrimitive {
  // We MUST NOT RESTRICT THIS to "object" | "array" | "function", or else
  // type guards for those specific types will include this.
  readonly runtimeTypeOf: string;

  get prototype(): StaticJsObjectLike | null;

  get extensible(): boolean;

  setPrototypeOf(prototype: StaticJsObject | null): void;

  setPrototypeOfEvaluator(
    prototype: StaticJsObjectLike | null,
  ): EvaluationGenerator;

  preventExtensions(): void;

  preventExtensionsEvaluator(): EvaluationGenerator<void>;

  getKeys(): string[];

  getKeysEvaluator(): EvaluationGenerator<string[]>;

  getEnumerableKeys(): string[];
  getEnumerableKeysEvaluator(): EvaluationGenerator<string[]>;

  getOwnKeys(): string[];

  getOwnKeysEvaluator(): EvaluationGenerator<string[]>;

  getOwnEnumerableKeys(): string[];

  getOwnEnumerableKeysEvaluator(): EvaluationGenerator<string[]>;

  hasProperty(name: string): boolean;

  hasPropertyEvaluator(name: string): EvaluationGenerator<boolean>;

  getPropertyDescriptor(name: string): StaticJsPropertyDescriptor | undefined;

  getPropertyDescriptorEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  getOwnPropertyDescriptor(
    name: string,
  ): StaticJsPropertyDescriptor | undefined;

  getOwnPropertyDescriptorEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  defineProperty(name: string, descriptor: StaticJsPropertyDescriptor): void;

  definePropertyEvaluator(
    name: string,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<void>;

  getProperty(name: string): StaticJsValue;

  getPropertyEvaluator(name: string): EvaluationGenerator<StaticJsValue>;

  setProperty(name: string, value: StaticJsValue, strict: boolean): void;

  setPropertyEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void>;

  deleteProperty(name: string): boolean;

  deletePropertyEvaluator(name: string): EvaluationGenerator<boolean>;
}

export function isStaticJsObjectLike(
  value: unknown,
): value is StaticJsObjectLike {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return ["object", "array", "function"].includes(value.runtimeTypeOf);
}

export interface StaticJsObject extends StaticJsObjectLike {
  readonly runtimeTypeOf: "object";
}
export function isStaticJsObject(value: unknown): value is StaticJsObject {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "object";
}
