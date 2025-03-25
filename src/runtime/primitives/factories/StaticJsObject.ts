import typedMerge from "../../../internal/typed-merge.js";

import StaticJsEnvObject from "../implementation/StaticJsEnvObject.js";
import StaticJsExternalObject from "../implementation/StaticJsExternalObject.js";

import {
  StaticJsObject as IStaticJsObject,
  isStaticJsValue,
} from "../interfaces/index.js";

import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";

export interface StaticJsObjectConfig {
  static?: boolean;
  // TODO: More fine-grained control.
  // Pass array of writable properties, and per-property env-only vs writeback.
  writable?: boolean | "env-only" | "writeback";
}

function StaticJsObject(
  obj?: Record<string, any>,
  { static: isStatic, writable }: StaticJsObjectConfig = {},
): IStaticJsObject {
  if (obj === undefined) {
    return new StaticJsEnvObject();
  }

  if (staticJsInstanceOf(obj) === "object") {
    return obj as unknown as IStaticJsObject;
  }

  if (typeof obj !== "object" && !obj) {
    throw new Error("Not an object");
  }

  if (isStatic && writable) {
    throw new Error("Cannot be both static and writable");
  }

  if (writable === true) {
    writable = "env-only";
  } else if (writable !== "writeback") {
    obj = new Proxy(obj, {
      isExtensible(target) {
        return false;
      },
      defineProperty(target, prop, descriptor) {
        // Eat the operation.
        return true;
      },
      deleteProperty(target, prop) {
        // Eat the operation.
        return true;
      },
      setPrototypeOf(target, v) {
        // Eat the operation.
        return true;
      },
      apply(target, thisArg, argArray) {
        // Eat the operation.
        return target;
      },
      preventExtensions(target) {
        // Eat the operation.
        return true;
      },
      set(target, p, newValue, receiver) {
        // Eat the operation.
        return true;
      },
    });
  }

  // By default allow mutations.
  return new StaticJsExternalObject(obj, {
    mutationTarget:
      writable === "env-only" ? new StaticJsEnvObject() : undefined,
    // TODO: Option to let the script env extend the global object
    extensible: writable === "env-only" || false,
  });
}

export default typedMerge(StaticJsObject, {
  toPropertyKey(value: any) {
    if (isStaticJsValue(value)) {
      value = value.toJs();
    }

    if (typeof value !== "string" && typeof value !== "number") {
      throw new Error("Invalid property key");
    }

    return String(value);
  },
});
