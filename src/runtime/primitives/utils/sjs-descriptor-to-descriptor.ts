import { StaticJsValue } from "../factories/index.js";
import {
  isStaticJsObjectPropertyDescriptorGetter,
  isStaticJsObjectPropertyDescriptorValue,
  StaticJsObjectPropertyDescriptor,
} from "../interfaces/index.js";

export default function staticJsDescriptorToObjectDescriptor(
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
      set!(StaticJsValue(value), false);
    };
  }

  if (isStaticJsObjectPropertyDescriptorValue(descriptor)) {
    objDescriptor.value = descriptor.value.toJs();
  }

  return objDescriptor;
}
