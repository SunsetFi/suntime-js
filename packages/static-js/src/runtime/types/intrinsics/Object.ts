import {
  ReturnCompletion,
  ThrowCompletion,
} from "../../../evaluator/internal.js";

import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsValue } from "../interfaces/StaticJsValue.js";
import {
  StaticJsObject,
  isStaticJsObjectLike,
} from "../interfaces/StaticJsObject.js";

import StaticJsStringImpl from "../implementation/StaticJsStringImpl.js";
import StaticJsObjectImpl from "../implementation/StaticJsObjectImpl.js";
import StaticJsFunctionImpl from "../implementation/StaticJsFunctionImpl.js";
import StaticJsBooleanImpl from "../implementation/StaticJsBooleanImpl.js";

export function populateObjectPrototype(
  realm: StaticJsRealm,
  objectProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  objectProto.defineProperty("hasOwnProperty", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "hasOwnProperty",
      function* (thisArg: StaticJsValue, key: StaticJsValue) {
        if (!isStaticJsObjectLike(thisArg)) {
          // FIXME: throw real error.
          throw new TypeError(
            "Object.prototype.hasOwnProperty called on non-object",
          );
        }

        if (key.runtimeTypeOf !== "string") {
          return ReturnCompletion(new StaticJsBooleanImpl(false));
        }

        const descr = yield* thisArg.getOwnPropertyDescriptorEvaluator(
          key.toString(),
        );
        return ReturnCompletion(new StaticJsBooleanImpl(descr != null));
      },
      undefined,
      functionProto,
    ),
  });

  return objectProto;
}

export function createObjectConstructor(
  realm: StaticJsRealm,
  objectPrototype: StaticJsObject,
  functionPrototype: StaticJsObject,
) {
  // FIXME: This should be a function.
  const ctor = new StaticJsObjectImpl(realm, functionPrototype);
  ctor.defineProperty("prototype", {
    value: objectPrototype,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  ctor.defineProperty("keys", {
    value: new StaticJsFunctionImpl(
      realm,
      "keys",
      function* (_thisArg: StaticJsValue, obj: StaticJsValue) {
        if (!isStaticJsObjectLike(obj)) {
          // FIXME: throw real error.
          throw new TypeError("Object.keys called on non-object");
        }
        const ownKeys = yield* obj.getOwnKeysEvaluator();
        const result = realm.types.createArray(
          ownKeys.map((value) => new StaticJsStringImpl(value)),
        );
        return ReturnCompletion(result);
      },
      undefined,
      functionPrototype,
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  ctor.defineProperty("values", {
    value: new StaticJsFunctionImpl(
      realm,
      "values",
      function* (_thisArg: StaticJsValue, obj: StaticJsValue) {
        if (!isStaticJsObjectLike(obj)) {
          // FIXME: throw real error.
          throw new TypeError("Object.values called on non-object");
        }

        const ownKeys = yield* obj.getOwnKeysEvaluator();
        const values = new Array<StaticJsValue>(ownKeys.length);
        for (let i = 0; i < ownKeys.length; i++) {
          values[i] = yield* obj.getPropertyEvaluator(ownKeys[i]);
        }
        return ReturnCompletion(realm.types.createArray(values));
      },
      undefined,
      functionPrototype,
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  ctor.defineProperty("entries", {
    value: new StaticJsFunctionImpl(
      realm,
      "entries",
      function* (_thisArg: StaticJsValue, obj: StaticJsValue) {
        if (!isStaticJsObjectLike(obj)) {
          // FIXME: throw real error.
          throw new TypeError("Object.entries called on non-object");
        }

        const ownKeys = yield* obj.getOwnKeysEvaluator();
        const entries = new Array<StaticJsValue>(ownKeys.length);
        for (let i = 0; i < ownKeys.length; i++) {
          const key = new StaticJsStringImpl(ownKeys[i]);
          const value = yield* obj.getPropertyEvaluator(ownKeys[i]);
          entries[i] = realm.types.createArray([key, value]);
        }
        return ReturnCompletion(realm.types.createArray(entries));
      },
      undefined,
      functionPrototype,
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  ctor.defineProperty("hasOwn", {
    value: new StaticJsFunctionImpl(
      realm,
      "hasOwn",
      function* (
        _thisArg: StaticJsValue,
        obj: StaticJsValue,
        property: StaticJsValue,
      ) {
        if (!isStaticJsObjectLike(obj)) {
          // FIXME: throw real error.
          throw new TypeError("Object.hasOwn called on non-object");
        }

        if (property.runtimeTypeOf !== "string") {
          return ReturnCompletion(new StaticJsBooleanImpl(false));
        }

        const descr = yield* obj.getOwnPropertyDescriptorEvaluator(
          property.toString(),
        );
        return ReturnCompletion(new StaticJsBooleanImpl(descr != null));
      },
      undefined,
      functionPrototype,
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  ctor.defineProperty("create", {
    value: new StaticJsFunctionImpl(
      realm,
      "create",
      function* (_thisArg: StaticJsValue, proto: StaticJsValue) {
        if (!isStaticJsObjectLike(proto)) {
          // FIXME: throw real error.
          throw new TypeError("Object.create called on non-object");
        }

        return ReturnCompletion(realm.types.createObject(undefined, proto));
      },
      undefined,
      functionPrototype,
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  ctor.defineProperty("freeze", {
    value: new StaticJsFunctionImpl(
      realm,
      "freeze",
      function* (_thisArg: StaticJsValue, obj: StaticJsValue) {
        if (!isStaticJsObjectLike(obj)) {
          // FIXME: throw real error.
          throw new TypeError("Object.freeze called on non-object");
        }

        yield* obj.preventExtensionEvaluator();
        return ReturnCompletion(obj);
      },
      undefined,
      functionPrototype,
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  ctor.defineProperty("getPrototypeOf", {
    value: new StaticJsFunctionImpl(
      realm,
      "getPrototypeOf",
      function* (_thisArg: StaticJsValue, obj: StaticJsValue) {
        if (!isStaticJsObjectLike(obj)) {
          // FIXME: throw real error.
          throw new TypeError("Object.setPrototypeOf called on non-object");
        }

        const proto = obj.prototype;
        if (proto == null) {
          return ReturnCompletion(realm.types.null);
        }

        return ReturnCompletion(proto);
      },
      undefined,
      functionPrototype,
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });
  ctor.defineProperty("setPrototypeOf", {
    value: new StaticJsFunctionImpl(
      realm,
      "freeze",
      function* (
        _thisArg: StaticJsValue,
        obj: StaticJsValue,
        proto: StaticJsValue,
      ) {
        if (!isStaticJsObjectLike(obj)) {
          // FIXME: throw real error.
          throw new TypeError("Object.setPrototypeOf called on non-object");
        }

        // FIXME: This is weird.  We should make setPrototypeOf accept StaticJsNull
        let resolvedProto: StaticJsObject | null;
        if (proto.runtimeTypeOf === "null") {
          resolvedProto = null;
        } else if (!isStaticJsObjectLike(proto)) {
          // FIXME: throw real error.
          throw new TypeError(
            "Object.setPrototypeOf called with non-object prototype",
          );
        } else {
          resolvedProto = proto;
        }

        if (!obj.extensible) {
          // FIXME: throw real error.
          return ThrowCompletion(
            new StaticJsStringImpl("Object is not extensible"),
          );
        }
        yield* obj.setPrototypeOfEvaluator(resolvedProto);

        return ReturnCompletion(obj);
      },
      undefined,
      functionPrototype,
    ),
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
