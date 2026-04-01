import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { StaticJsObjectLike, StaticJsPropertyKey } from "../types/StaticJsObjectLike.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  isStaticJsGenericPropertyDescriptor,
  type StaticJsPropertyDescriptor,
  type StaticJsPropertyDescriptorRecord,
} from "../types/StaticJsPropertyDescriptor.js";

import sameValue from "./same-value.js";

export function* validateAndApplyPropertyDescriptor(
  o: StaticJsObjectLike | undefined,
  p: StaticJsPropertyKey,
  extensible: boolean,
  desc: StaticJsPropertyDescriptorRecord,
  current?: StaticJsPropertyDescriptor,
): EvaluationGenerator<boolean> {
  if (current === undefined) {
    if (!extensible) {
      return false;
    }

    if (o === undefined) {
      return true;
    }

    // Note: Spec says WE do the work here, depending on accessor or data property.
    yield* o.defineOwnPropertyEvaluator(p, desc);
    return true;
  }

  if (Object.keys(desc).length === 0) {
    return true;
  }

  if (current.configurable === false) {
    if (desc.configurable !== undefined && desc.configurable) {
      return false;
    }
    if (desc.enumerable !== undefined && desc.enumerable !== current.enumerable) {
      return false;
    }

    if (
      !isStaticJsGenericPropertyDescriptor(desc) &&
      isStaticJsAccessorPropertyDescriptor(desc) !== isStaticJsAccessorPropertyDescriptor(current)
    ) {
      return false;
    }

    if (isStaticJsAccessorPropertyDescriptor(current)) {
      if (desc.get && desc.get !== current.get) {
        return false;
      }
      if (desc.set && desc.set !== current.set) {
        return false;
      }
    } else {
      if (current.writable === false) {
        if (desc.writable === true) {
          return false;
        }

        if (desc.value !== undefined) {
          return sameValue(desc.value, current.value);
        }
      }
    }
  }

  if (o) {
    if (isStaticJsDataPropertyDescriptor(current) && isStaticJsAccessorPropertyDescriptor(desc)) {
      const configurable =
        desc.configurable !== undefined ? desc.configurable : current.configurable;
      const enumerable = desc.enumerable !== undefined ? desc.enumerable : current.enumerable;
      const get = isStaticJsAccessorPropertyDescriptor(desc) && desc.get ? desc.get : undefined;
      const set = isStaticJsAccessorPropertyDescriptor(desc) && desc.set ? desc.set : undefined;
      yield* o.defineOwnPropertyEvaluator(p, {
        configurable,
        enumerable,
        get,
        set,
      });
    } else if (
      isStaticJsAccessorPropertyDescriptor(current) &&
      isStaticJsDataPropertyDescriptor(desc)
    ) {
      const configurable =
        desc.configurable !== undefined ? desc.configurable : current.configurable;
      const enumerable = desc.enumerable !== undefined ? desc.enumerable : current.enumerable;
      const value =
        isStaticJsDataPropertyDescriptor(desc) && desc.value !== undefined
          ? desc.value
          : o.realm.types.undefined;
      const writable =
        isStaticJsDataPropertyDescriptor(desc) && desc.writable !== undefined
          ? desc.writable
          : false;
      yield* o.defineOwnPropertyEvaluator(p, {
        configurable,
        enumerable,
        value,
        writable,
      });
    } else {
      // TODO: We should be the one to set this, and AbstractObject should call us.
      yield* o.defineOwnPropertyEvaluator(p, desc);
    }
  }

  return true;
}
