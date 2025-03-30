import {
  isStaticJsObjectLike,
  StaticJsValue,
} from "../primitives/interfaces/index.js";

import StaticJsEnvString from "../primitives/implementation/StaticJsEnvString.js";
import StaticJsEnvArray from "../primitives/implementation/StaticJsEnvArray.js";
import StaticJsEnvObject from "../primitives/implementation/StaticJsEnvObject.js";
import StaticJsValueFunction from "../primitives/implementation/StaticJsValueFunction.js";

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
    value: new StaticJsValueFunction(
      "keys",
      (_thisArg: StaticJsValue, obj: StaticJsValue) => {
        if (!isStaticJsObjectLike(obj)) {
          // FIXME: throw real error.
          throw new TypeError("Object.keys called on non-object");
        }
        return new StaticJsEnvArray(
          obj.getOwnKeys().map((value) => new StaticJsEnvString(value)),
        );
      },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  ctor.defineProperty("values", {
    value: new StaticJsValueFunction(
      "values",
      (_thisArg: StaticJsValue, obj: StaticJsValue) => {
        if (!isStaticJsObjectLike(obj)) {
          // FIXME: throw real error.
          throw new TypeError("Object.values called on non-object");
        }

        return new StaticJsEnvArray(
          obj.getOwnKeys().map((key) => obj.getProperty(key)),
        );
      },
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  ctor.defineProperty("entries", {
    value: new StaticJsValueFunction(
      "entries",
      (_thisArg: StaticJsValue, obj: StaticJsValue) => {
        if (!isStaticJsObjectLike(obj)) {
          // FIXME: throw real error.
          throw new TypeError("Object.entries called on non-object");
        }

        return new StaticJsEnvArray(
          obj
            .getOwnKeys()
            .map(
              (key) =>
                new StaticJsEnvArray([
                  new StaticJsEnvString(key),
                  obj.getProperty(key),
                ]),
            ),
        );
      },
    ),
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
