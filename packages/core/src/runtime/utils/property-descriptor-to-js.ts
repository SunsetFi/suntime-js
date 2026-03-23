import { dropUndefined } from "../../utils/drop-undefined.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsPropertyDescriptor } from "../types/StaticJsPropertyDescriptor.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
} from "../types/StaticJsPropertyDescriptor.js";

export function properrtyDescriptorToJs(
  descriptor: StaticJsPropertyDescriptor,
  realm: StaticJsRealm,
): PropertyDescriptor {
  const objDescriptor: PropertyDescriptor = dropUndefined({
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
  });

  if (isStaticJsAccessorPropertyDescriptor(descriptor)) {
    const { get, set } = descriptor;
    if (get) {
      objDescriptor.get = function () {
        const thisArg = realm.types.toStaticJsValue(this);
        const result = get.callSync(thisArg);
        return result.toJsSync();
      };
    }
    if (set) {
      objDescriptor.set = function (value: unknown) {
        const thisArg = realm.types.toStaticJsValue(this);
        const staticJsValue = realm.types.toStaticJsValue(value);
        set.callSync(thisArg, [staticJsValue]);
      };
    }
  } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
    const { writable, value } = descriptor;
    if (writable !== undefined) {
      objDescriptor.writable = writable;
    }

    if (value !== undefined) {
      objDescriptor.value = value.toJsSync();
    }
  }

  return objDescriptor;
}
