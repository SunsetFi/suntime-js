import { runEvaluatorUntilCompletion } from "../../../evaluator/evaluator-runtime.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsPropertyDescriptor } from "../StaticJsPropertyDescriptor.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";

export default function staticJsDescriptorToObjectDescriptor(
  realm: StaticJsRealm,
  descriptor: StaticJsPropertyDescriptor,
): PropertyDescriptor {
  const objDescriptor: PropertyDescriptor = {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
  };

  if (isStaticJsAccessorPropertyDescriptor(descriptor)) {
    if (descriptor.get) {
      objDescriptor.get = function () {
        const result = runEvaluatorUntilCompletion(
          descriptor.get!.callEvaluator(realm.types.toStaticJsValue(this)),
        );
        return result.toJs();
      };
    }
    if (descriptor.set) {
      objDescriptor.value = function (value: unknown) {
        const thisValue = realm.types.toStaticJsValue(this);
        const staticJsValue = realm.types.toStaticJsValue(value);
        runEvaluatorUntilCompletion(
          descriptor.set!.callEvaluator(thisValue, staticJsValue),
        );
      };
    }
  } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
    objDescriptor.value = descriptor.value.toJs();
  }

  return objDescriptor;
}
