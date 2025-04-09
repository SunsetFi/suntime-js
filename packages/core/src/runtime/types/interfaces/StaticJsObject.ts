import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { runEvaluatorUntilCompletion } from "../../../evaluator/evaluator-runtime.js";

import hasOwnProperty from "../../../internal/has-own-property.js";

import { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsObjectLike extends StaticJsPrimitive {
  // We MUST NOT RESTRICT THIS to "object" | "array" | "function", or else
  // type guards for those specific types will include this.
  readonly runtimeTypeOf: string;

  get prototype(): StaticJsObjectLike | null;

  get extensible(): boolean;

  setPrototypeOf(prototype: StaticJsObject | null): void;

  setPrototypeOfEvaluator(
    prototype: StaticJsObjectLike | null,
  ): EvaluationGenerator<void>;

  preventExtension(): void;

  preventExtensionEvaluator(): EvaluationGenerator<void>;

  getOwnKeys(): string[];

  getOwnKeysEvaluator(): EvaluationGenerator<string[]>;

  getOwnEnumerableKeys(): string[];

  getOwnEnumerableKeysEvaluator(): EvaluationGenerator<string[]>;

  hasProperty(name: string): boolean;

  hasPropertyEvaluator(name: string): EvaluationGenerator<boolean>;

  getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined;

  getPropertyDescriptorEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsObjectPropertyDescriptor | undefined>;

  getOwnPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined;

  getOwnPropertyDescriptorEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsObjectPropertyDescriptor | undefined>;

  defineProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void;

  definePropertyEvaluator(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
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

export function isStaticJsObjectLike(value: unknown): value is StaticJsObject {
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

export interface StaticJsObjectPropertyDescriptorBase {
  readonly configurable?: boolean;
  readonly enumerable?: boolean;
  readonly writable?: boolean;
  set?(value: StaticJsValue, strict: boolean): EvaluationGenerator<void>;
}

export interface StaticJsObjectPropertyDescriptorValue
  extends StaticJsObjectPropertyDescriptorBase {
  readonly value?: StaticJsValue;
}

export interface StaticJsObjectPropertyDescriptorGetter
  extends StaticJsObjectPropertyDescriptorBase {
  get?(this: StaticJsValue): EvaluationGenerator<StaticJsValue>;
}

export type StaticJsObjectPropertyDescriptor =
  | StaticJsObjectPropertyDescriptorValue
  | StaticJsObjectPropertyDescriptorGetter;

export function validateStaticJsObjectPropertyDescriptor(
  value: unknown,
): asserts value is StaticJsObjectPropertyDescriptor {
  if (!value || typeof value !== "object") {
    throw new Error("StaticJsObjectPropertyDescriptor must be an object.");
  }

  const hasValue = hasOwnProperty(value, "value");
  const hasGet = hasOwnProperty(value, "get");

  if (hasValue && hasGet) {
    throw new Error(
      "StaticJsObjectPropertyDescriptor cannot have both value and get.",
    );
  }

  if (hasValue && !isStaticJsValue(value.value)) {
    throw new Error(
      "StaticJsObjectPropertyDescriptor value must be a StaticJsValue.",
    );
  }

  if (hasGet && typeof value.get !== "function") {
    throw new Error("StaticJsObjectPropertyDescriptor get must be a function.");
  }
}

export function isStaticJsObjectPropertyDescriptorValue(
  value: unknown,
): value is Required<StaticJsObjectPropertyDescriptorValue> {
  if (!value || typeof value !== "object") {
    return false;
  }

  return hasOwnProperty(value, "value");
}

export function isStaticJsObjectPropertyDescriptorGetter(
  value: unknown,
): value is Required<StaticJsObjectPropertyDescriptorGetter> {
  if (!value || typeof value !== "object") {
    return false;
  }

  return hasOwnProperty(value, "get");
}

export function getStaticJsObjectPropertyDescriptorValue(
  thisArg: StaticJsObject,
  descriptor: StaticJsObjectPropertyDescriptor,
): StaticJsValue | null {
  const hasValue = isStaticJsObjectPropertyDescriptorValue(descriptor);
  const hasGet = isStaticJsObjectPropertyDescriptorGetter(descriptor);

  if (hasValue && hasGet) {
    throw new Error(
      "StaticJsObjectPropertyDescriptor cannot have both value and get.",
    );
  }

  if (hasValue) {
    return descriptor.value as StaticJsValue;
  } else if (hasGet) {
    // FIXME HACK: Make evaluator
    return runEvaluatorUntilCompletion(descriptor.get.call(thisArg));
  }

  return null;
}
