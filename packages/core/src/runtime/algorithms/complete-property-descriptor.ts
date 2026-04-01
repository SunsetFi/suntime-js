import { Writable } from "type-fest";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import {
  isStaticJsDataPropertyDescriptor,
  isStaticJsGenericPropertyDescriptor,
  StaticJsAccessorPropertyDescriptor,
  StaticJsDataPropertyDescriptor,
  StaticJsPropertyDescriptor,
} from "../types/StaticJsPropertyDescriptor.js";

export function completePropertyDescriptor(
  desc: Partial<StaticJsPropertyDescriptor>,
): StaticJsPropertyDescriptor {
  const realm = EvaluationContext.current.realm;
  let targetDesc = desc as Writable<
    StaticJsDataPropertyDescriptor & StaticJsAccessorPropertyDescriptor
  >;
  if (isStaticJsGenericPropertyDescriptor(desc) || isStaticJsDataPropertyDescriptor(desc)) {
    if (!targetDesc.value) {
      targetDesc.value = realm.types.undefined;
    }
    if (targetDesc.writable === undefined) {
      targetDesc.writable = false;
    }
  } else {
    if (!targetDesc.get) {
      targetDesc.get = undefined;
    }
    if (!targetDesc.set) {
      targetDesc.set = undefined;
    }
  }

  if (targetDesc.enumerable === undefined) {
    targetDesc.enumerable = false;
  }
  if (targetDesc.configurable === undefined) {
    targetDesc.configurable = false;
  }

  return targetDesc as StaticJsPropertyDescriptor;
}
