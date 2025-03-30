import typedMerge from "../../../internal/typed-merge.js";

import StaticJsEnvObject from "../implementation/StaticJsEnvObject.js";
import StaticJsExternalObject from "../implementation/StaticJsExternalObject.js";

import {
  StaticJsObject as IStaticJsObject,
  isStaticJsObject,
  isStaticJsValue,
} from "../interfaces/index.js";

export interface StaticJsObjectConfig {
  static?: boolean;
  // TODO: More fine-grained control.
  // Pass array of writable properties, and per-property env-only vs writeback.
  writable?: boolean | "env-only" | "writeback";
  prototype?: object | IStaticJsObject | null;
}

function StaticJsObject(
  obj?: object | IStaticJsObject | null | undefined,
  { static: isStatic, writable, prototype }: StaticJsObjectConfig = {},
): IStaticJsObject {
  if (obj == null) {
    return new StaticJsEnvObject(prototype ? StaticJsObject(prototype) : null);
  }

  if (isStaticJsObject(obj)) {
    return obj;
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
      isExtensible() {
        return false;
      },
      defineProperty() {
        // Eat the operation.
        return true;
      },
      deleteProperty() {
        // Eat the operation.
        return true;
      },
      setPrototypeOf() {
        // Eat the operation.
        return true;
      },
      apply(target) {
        // Eat the operation.
        return target;
      },
      preventExtensions() {
        // Eat the operation.
        return true;
      },
      set() {
        // Eat the operation.
        return true;
      },
    });
  }

  return new StaticJsExternalObject(obj);
}

export default typedMerge(StaticJsObject, {
  toPropertyKey(value: unknown) {
    if (isStaticJsValue(value)) {
      value = value.toJs();
    }

    if (typeof value !== "string" && typeof value !== "number") {
      throw new Error("Invalid property key");
    }

    return String(value);
  },
});
