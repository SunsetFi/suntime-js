import {
  isStaticJsObjectLike,
  StaticJsValue,
} from "../types/interfaces/index.js";

import StaticJsEnvString from "../types/implementation/StaticJsEnvString.js";
import StaticJsEnvArray from "../types/implementation/StaticJsEnvArray.js";
import StaticJsEnvObject from "../types/implementation/StaticJsEnvObject.js";
import StaticJsValueFunction from "../types/implementation/StaticJsValueFunction.js";
import StaticJsEnvFunction from "../types/implementation/StaticJsEnvFunction.js";
import { ReturnCompletion } from "../../evaluator/internal.js";

export default function createObject(): StaticJsValue {
  const proto = new StaticJsEnvObject(null);
  const ctor = new StaticJsEnvObject(null);
  ctor.defineProperty("prototype", {
    value: proto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  ctor.defineProperty("keys", {
    value: new StaticJsEnvFunction("keys", function* (
      _thisArg: StaticJsValue,
      obj: StaticJsValue,
    ) {
      if (!isStaticJsObjectLike(obj)) {
        // FIXME: throw real error.
        throw new TypeError("Object.keys called on non-object");
      }
      const ownKeys = yield* obj.getOwnKeysEvaluator();
      const result = new StaticJsEnvArray(
        ownKeys.map((value) => new StaticJsEnvString(value)),
      );
      return ReturnCompletion(result);
    }),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  ctor.defineProperty("values", {
    value: new StaticJsEnvFunction("values", function* (
      _thisArg: StaticJsValue,
      obj: StaticJsValue,
    ) {
      if (!isStaticJsObjectLike(obj)) {
        // FIXME: throw real error.
        throw new TypeError("Object.values called on non-object");
      }

      const ownKeys = yield* obj.getOwnKeysEvaluator();
      const values = new Array<StaticJsValue>(ownKeys.length);
      for (let i = 0; i < ownKeys.length; i++) {
        values[i] = yield* obj.getPropertyEvaluator(ownKeys[i]);
      }
      return ReturnCompletion(new StaticJsEnvArray(values));
    }),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  ctor.defineProperty("entries", {
    value: new StaticJsEnvFunction("entries", function* (
      _thisArg: StaticJsValue,
      obj: StaticJsValue,
    ) {
      if (!isStaticJsObjectLike(obj)) {
        // FIXME: throw real error.
        throw new TypeError("Object.entries called on non-object");
      }

      const ownKeys = yield* obj.getOwnKeysEvaluator();
      const entries = new Array<StaticJsValue>(ownKeys.length);
      for (let i = 0; i < ownKeys.length; i++) {
        const key = new StaticJsEnvString(ownKeys[i]);
        const value = yield* obj.getPropertyEvaluator(ownKeys[i]);
        entries[i] = new StaticJsEnvArray([key, value]);
      }
      return ReturnCompletion(new StaticJsEnvArray(entries));
    }),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  ctor.defineProperty("create", {
    value: new StaticJsValueFunction(
      "create",
      (_thisArg: StaticJsValue, proto: StaticJsValue) => {
        if (!isStaticJsObjectLike(proto) && proto !== null) {
          // FIXME: throw real error.
          throw new TypeError("Object.create called on non-object");
        }

        return new StaticJsEnvObject(proto);
      },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  return ctor;
}
