import { runEvaluatorUntilCompletion } from "../../../evaluator/evaluator-runtime.js";

import hasOwnProperty from "../../../internal/has-own-property.js";
import { isStaticJsFunction, StaticJsFunction } from "./StaticJsFunction.js";
import { StaticJsObjectLike } from "./StaticJsObject.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsPropertyDescriptorBase {
  readonly configurable?: boolean;
  readonly enumerable?: boolean;
}

export interface StaticJsDataPropertyDescriptor
  extends StaticJsPropertyDescriptorBase {
  readonly writable?: boolean;
  readonly value: StaticJsValue;
}

export interface StaticJsAccessorPropertyDescriptor
  extends StaticJsPropertyDescriptorBase {
  get?: StaticJsFunction;
  set?: StaticJsFunction;
}

export type StaticJsPropertyDescriptor =
  | StaticJsDataPropertyDescriptor
  | StaticJsAccessorPropertyDescriptor;

export function validateStaticJsPropertyDescriptor(
  value: unknown,
): asserts value is StaticJsPropertyDescriptor {
  if (!value || typeof value !== "object") {
    throw new Error("StaticJsPropertyDescriptor must be an object.");
  }

  const hasWritable = hasOwnProperty(value, "writable");
  const hasValue = hasOwnProperty(value, "value");
  const hasGet = hasOwnProperty(value, "get");
  const hasSet = hasOwnProperty(value, "set");

  const hasAccessor = hasGet || hasSet;

  if (hasAccessor && (hasWritable || hasValue)) {
    throw new Error(
      "Invalid property descriptor.  Cannot both specify accessors and a value or writable attribute",
    );
  }

  if (hasValue && !isStaticJsValue(value.value)) {
    throw new Error("value must be a StaticJsValue.");
  }

  if (hasGet && !isStaticJsFunction(value.get)) {
    throw new Error("get must be a StaticJsFunction.");
  }

  if (hasSet && !isStaticJsFunction(value.set)) {
    throw new Error("set must be a StaticJsFunction.");
  }
}

export function isStaticJsDataPropertyDescriptor(
  value: unknown,
): value is StaticJsDataPropertyDescriptor {
  if (!value || typeof value !== "object") {
    return false;
  }

  return hasOwnProperty(value, "value");
}

export function isStaticJsAccessorPropertyDescriptor(
  value: unknown,
): value is StaticJsAccessorPropertyDescriptor {
  if (!value || typeof value !== "object") {
    return false;
  }

  return hasOwnProperty(value, "get") || hasOwnProperty(value, "set");
}

export function getStaticJsPropertyDescriptorValue(
  obj: StaticJsObjectLike,
  descriptor: StaticJsPropertyDescriptor,
): StaticJsValue | null {
  const hasValue = isStaticJsDataPropertyDescriptor(descriptor);
  const hasGet = isStaticJsAccessorPropertyDescriptor(descriptor);

  if (hasValue && hasGet) {
    throw new Error(
      "StaticJsPropertyDescriptor cannot have both value and get.",
    );
  }

  if (hasValue) {
    return descriptor.value as StaticJsValue;
  } else if (hasGet) {
    // FIXME HACK: Make evaluator
    const completion = runEvaluatorUntilCompletion(descriptor.get!.call(obj));
    if (completion.type === "throw") {
      // FIXME: Wrap error properly.
      const err = completion.value;
      throw new Error(
        `Error evaluating property descriptor get: ${err.toString()}`,
      );
    }
    if (completion.type !== "normal" || !completion.value) {
      throw new Error(
        `Property descriptor get did not return a normal completion.`,
      );
    }
    return completion.value;
  }

  return null;
}
