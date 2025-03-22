import { mapValues } from "lodash-es";

import StaticJsEnvObject from "../implementation/StaticJsEnvObject.js";
import StaticJsExternalObject, {
  StaticJsRuntimeObjectValue,
} from "../implementation/StaticJsExternalObject.js";
import toStaticJsValue from "../utils/to-static-js-value.js";
import {
  StaticJsValue,
  StaticJsObject as IStaticJsObject,
  isStaticJsValue,
} from "../interfaces/index.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
import typedMerge from "../../../internal/typed-merge.js";

export interface StaticJsObjectConfig {
  static?: boolean;
  writable?: boolean;
  mutatable?: boolean;
}

function StaticJsObject(
  obj?: Record<string, any>,
  { static: isStatic, writable, mutatable }: StaticJsObjectConfig = {},
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

  if (writable) {
    // TODO: We need to unwrap the value for writeback
    throw new Error("Writable not implemented");
  }

  // By default allow mutations.
  return new StaticJsExternalObject(
    mapValues(obj, (key, value) => {
      let getter: () => StaticJsValue;
      if (isStatic) {
        const resolved = toStaticJsValue(value);
        getter = () => resolved;
      } else {
        getter = () => toStaticJsValue(obj[key]);
      }

      return {
        get: () => toStaticJsValue(obj[key]),
        set: writable
          ? (value: StaticJsValue) => {
              obj[key] = value.toJs();
            }
          : undefined,
      } as StaticJsRuntimeObjectValue;
    }),
    mutatable ? new StaticJsEnvObject() : undefined,
  );
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
