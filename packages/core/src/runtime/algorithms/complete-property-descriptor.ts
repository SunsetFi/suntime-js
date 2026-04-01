import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import {
  isStaticJsDataPropertyDescriptor,
  isStaticJsGenericPropertyDescriptor,
  type StaticJsPropertyDescriptor,
  type StaticJsPropertyDescriptorRecord,
} from "../types/StaticJsPropertyDescriptor.js";

export function completePropertyDescriptor(
  desc: StaticJsPropertyDescriptorRecord,
): StaticJsPropertyDescriptor {
  const realm = EvaluationContext.current.realm;
  if (isStaticJsGenericPropertyDescriptor(desc) || isStaticJsDataPropertyDescriptor(desc)) {
    if (!desc.value) {
      desc.value = realm.types.undefined;
    }
    if (desc.writable === undefined) {
      desc.writable = false;
    }
  } else {
    if (!desc.get) {
      desc.get = undefined;
    }
    if (!desc.set) {
      desc.set = undefined;
    }
  }

  if (desc.enumerable === undefined) {
    desc.enumerable = false;
  }
  if (desc.configurable === undefined) {
    desc.configurable = false;
  }

  return desc as StaticJsPropertyDescriptor;
}
