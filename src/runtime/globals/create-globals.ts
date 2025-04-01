import StaticJsNumberImpl from "../types/implementation/StaticJsNumberImpl.js";
import StaticJsUndefinedImpl from "../types/implementation/StaticJsUndefinedImpl.js";
import { StaticJsObjectPropertyDescriptor } from "../types/interfaces/StaticJsObject.js";

export function createGlobals(): Record<
  string,
  StaticJsObjectPropertyDescriptor
> {
  return {
    undefined: {
      value: StaticJsUndefinedImpl.Instance,
      writable: false,
      enumerable: false,
      configurable: false,
    },
    Infinity: {
      value: new StaticJsNumberImpl(Infinity),
      writable: false,
      enumerable: false,
      configurable: false,
    },
    NaN: {
      value: new StaticJsNumberImpl(NaN),
      writable: false,
      enumerable: false,
      configurable: false,
    },
    // Object: {
    //   value: createObject(),
    //   writable: true,
    //   enumerable: false,
    //   configurable: true,
    // },
  };
}
