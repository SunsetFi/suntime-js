import {
  StaticJsObjectPropertyDescriptor,
  StaticJsValue,
} from "../primitives/index.js";
import createObject from "./Object.js";

export function createGlobals(): Record<
  string,
  StaticJsObjectPropertyDescriptor
> {
  return {
    undefined: {
      value: StaticJsValue(undefined),
      writable: false,
      enumerable: false,
      configurable: false,
    },
    Infinity: {
      value: StaticJsValue(Infinity),
      writable: false,
      enumerable: false,
      configurable: false,
    },
    NaN: {
      value: StaticJsValue(NaN),
      writable: false,
      enumerable: false,
      configurable: false,
    },
    Object: {
      value: createObject(),
      writable: true,
      enumerable: false,
      configurable: true,
    },
  };
}
