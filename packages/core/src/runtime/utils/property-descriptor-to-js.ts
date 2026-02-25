import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsPropertyDescriptor } from "../types/StaticJsPropertyDescriptor.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
} from "../types/StaticJsPropertyDescriptor.js";

export default function properrtyDescriptorToJs(
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
        const result = realm.invokeEvaluatorSync(
          descriptor.get!.callEvaluator(realm.types.toStaticJsValue(this)),
        );
        return result.toJsSync();
      };
    }
    if (descriptor.set) {
      objDescriptor.value = function (value: unknown) {
        const thisValue = realm.types.toStaticJsValue(this);
        const staticJsValue = realm.types.toStaticJsValue(value);
        realm.invokeEvaluatorSync(descriptor.set!.callEvaluator(thisValue, [staticJsValue]));
      };
    }
  } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
    objDescriptor.value = (descriptor.value ?? realm.types.undefined).toJsSync();
  }

  return objDescriptor;
}
