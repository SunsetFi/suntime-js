import { runEvaluatorUntilCompletion } from "../../../evaluator/evaluator-runtime.js";

import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import {
  isStaticJsObjectPropertyDescriptorGetter,
  isStaticJsObjectPropertyDescriptorValue,
  StaticJsObjectPropertyDescriptor,
} from "../interfaces/index.js";

export default function staticJsDescriptorToObjectDescriptor(
  realm: StaticJsRealm,

  descriptor: StaticJsObjectPropertyDescriptor,
): PropertyDescriptor {
  const objDescriptor: PropertyDescriptor = {
    writable: descriptor.writable,
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
  };

  if (isStaticJsObjectPropertyDescriptorGetter(descriptor)) {
    objDescriptor.get = descriptor.get;
  }

  const set = descriptor.set;
  if (set) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    objDescriptor.set = (value: any) => {
      runEvaluatorUntilCompletion(
        set(realm.types.toStaticJsValue(value), false),
      );
    };
  }

  if (isStaticJsObjectPropertyDescriptorValue(descriptor)) {
    objDescriptor.value = descriptor.value.toJs();
  }

  return objDescriptor;
}
