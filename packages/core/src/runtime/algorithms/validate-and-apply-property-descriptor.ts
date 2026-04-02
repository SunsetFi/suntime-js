import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  isStaticJsGenericPropertyDescriptor,
  type StaticJsPropertyDescriptor,
  type StaticJsPropertyDescriptorRecord,
} from "../types/StaticJsPropertyDescriptor.js";

import sameValue from "./same-value.js";

export type PropertySlotSetter = (
  key: StaticJsPropertyKey,
  descriptor: StaticJsPropertyDescriptor,
) => EvaluationGenerator<boolean>;

export function* validateAndApplyPropertyDescriptor(
  setSlot: PropertySlotSetter | undefined,
  p: StaticJsPropertyKey,
  extensible: boolean,
  desc: StaticJsPropertyDescriptorRecord,
  current?: StaticJsPropertyDescriptor,
  realm?: StaticJsRealm,
): EvaluationGenerator<boolean> {
  if (current === undefined) {
    if (!extensible) {
      return false;
    }

    if (setSlot === undefined) {
      return true;
    }

    if (isStaticJsAccessorPropertyDescriptor(desc)) {
      yield* setSlot(p, {
        get: undefined,
        set: undefined,
        enumerable: false,
        configurable: false,
        ...desc,
      });
    } else {
      const undef = (realm ?? EvaluationContext.current.realm).types.undefined;
      const value =
        isStaticJsDataPropertyDescriptor(desc) && desc.value !== undefined ? desc.value : undef;
      yield* setSlot(p, {
        value,
        writable: false,
        enumerable: false,
        configurable: false,
        ...desc,
      });
    }

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

  if (setSlot) {
    const configurable = desc.configurable ?? current.configurable;
    const enumerable = desc.enumerable ?? current.enumerable;

    if (isStaticJsDataPropertyDescriptor(current) && isStaticJsAccessorPropertyDescriptor(desc)) {
      yield* setSlot(p, {
        get: undefined,
        set: undefined,
        ...desc,
        configurable,
        enumerable,
      });
    } else if (
      isStaticJsAccessorPropertyDescriptor(current) &&
      isStaticJsDataPropertyDescriptor(desc)
    ) {
      const undef = (realm ?? EvaluationContext.current.realm).types.undefined;
      yield* setSlot(p, {
        value: undef,
        writable: false,
        ...desc,
        configurable,
        enumerable,
      });
    } else {
      yield* setSlot(p, {
        ...current,
        ...desc,
      });
    }
  }

  return true;
}
