import { runEvaluatorUntilCompletion } from "../../../evaluator/evaluator-runtime.js";
import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import { StaticJsRealm } from "../../realm/interfaces/StaticJsRealm.js";

import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  StaticJsPropertyDescriptor,
} from "../interfaces/StaticJsPropertyDescriptor.js";

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
        const completion = runEvaluatorUntilCompletion(
          descriptor.get!.callEvaluator(realm.types.toStaticJsValue(this)),
        );
        if (completion.type === "throw") {
          throw realm.types.toStaticJsValue(completion.value);
        }
        if (completion.type !== "normal" || !completion.value) {
          throw new StaticJsEngineError(
            "Accessor property getter did not return a NormalCompletion with a value",
          );
        }
        return completion.value.toJs();
      };
    }
    if (descriptor.set) {
      objDescriptor.value = function (value: unknown) {
        const thisValue = realm.types.toStaticJsValue(this);
        const staticJsValue = realm.types.toStaticJsValue(value);
        const completion = runEvaluatorUntilCompletion(
          descriptor.set!.callEvaluator(thisValue, staticJsValue),
        );
        if (completion.type === "throw") {
          throw realm.types.toStaticJsValue(completion.value);
        }
        if (completion.type !== "normal") {
          throw new StaticJsEngineError(
            "Accessor property setter did not return a NormalCompletion",
          );
        }
      };
    }
  } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
    objDescriptor.value = descriptor.value.toJs();
  }

  return objDescriptor;
}
