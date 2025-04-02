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
import { isStaticJsNull } from "../interfaces/StaticJsNull.js";
import { isStaticJsUndefined } from "../interfaces/StaticJsUndefined.js";

import StaticJsObjectImpl from "../implementation/StaticJsObjectImpl.js";
import StaticJsFunctionImpl from "../implementation/StaticJsFunctionImpl.js";

export function populateObjectPrototype(
  realm: StaticJsRealm,
  objectProto: StaticJsObject,
  functionProto: StaticJsObject,
) {
  objectProto.defineProperty("toString", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: new StaticJsFunctionImpl(
      realm,
      "toString",
      function* (thisArg: StaticJsValue) {
        if (isStaticJsNull(thisArg)) {
          return ReturnCompletion(realm.types.string("[object Null]"));
        }

        if (isStaticJsUndefined(thisArg)) {
          return ReturnCompletion(realm.types.string("[object Undefined]"));
        }

        return ReturnCompletion(
          realm.types.string(`[object ${thisArg.runtimeTypeOf}]`),
        );
      },
      undefined,
      functionProto,
    ),
  });
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
          return ReturnCompletion(realm.types.false);
        }

        const descr = yield* thisArg.getOwnPropertyDescriptorEvaluator(
          key.toString(),
        );
        return ReturnCompletion(realm.types.boolean(descr != null));
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
      function* (_thisArg: StaticJsValue, value?: StaticJsValue) {
        if (!value) {
          // FIXME: throw real error.
          // FIXME: What is the real wording for this?
          throw new TypeError("Object.keys requires one argument.");
        }

        const obj = value.toObject();

        const ownKeys = yield* obj.getOwnKeysEvaluator();
        const result = realm.types.createArray(
          ownKeys.map((value) => realm.types.string(value)),
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
      function* (_thisArg: StaticJsValue, value?: StaticJsValue) {
        if (!value) {
          // FIXME: throw real error.
          // FIXME: What is the real wording for this?
          throw new TypeError("Object.values requires one argument.");
        }

        const obj = value.toObject();

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
      function* (_thisArg: StaticJsValue, value?: StaticJsValue) {
        if (!value) {
          // FIXME: throw real error.
          // FIXME: What is the real wording for this?
          throw new TypeError("Object.entries requires one argument.");
        }

        const obj = value.toObject();

        const ownKeys = yield* obj.getOwnKeysEvaluator();

        const entries = new Array<StaticJsValue>(ownKeys.length);
        for (let i = 0; i < ownKeys.length; i++) {
          const key = realm.types.string(ownKeys[i]);
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
        value?: StaticJsValue,
        property?: StaticJsValue,
      ) {
        if (!value || !property) {
          // FIXME: throw real error.
          // FIXME: What is the real wording for this?
          throw new TypeError("Object.hasOwn requires two arguments.");
        }

        const obj = value.toObject();

        if (property.runtimeTypeOf !== "string") {
          return ReturnCompletion(realm.types.false);
        }

        const descr = yield* obj.getOwnPropertyDescriptorEvaluator(
          property.toString(),
        );
        return ReturnCompletion(realm.types.boolean(descr != null));
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
      function* (
        _thisArg: StaticJsValue,
        proto: StaticJsValue = realm.types.undefined,
      ) {
        if (!isStaticJsNull(proto) && !isStaticJsObjectLike(proto)) {
          // FIXME: throw real error.
          throw new TypeError("Object prototype may only be an Object or null");
        }

        return ReturnCompletion(
          realm.types.createObject(
            undefined,
            proto.runtimeTypeOf === "null" ? null : proto,
          ),
        );
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
      function* (
        _thisArg: StaticJsValue,
        value: StaticJsValue = realm.types.undefined,
      ) {
        // Weirdly, this one returns just fine with weird values.
        // It even returns them.
        if (isStaticJsNull(value) || isStaticJsUndefined(value)) {
          return ReturnCompletion(value);
        }

        const obj = value.toObject();

        yield* obj.preventExtensionEvaluator();

        // FIXME: I think the spec expects us to unbox this before returning it.
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
      function* (
        _thisArg: StaticJsValue,
        value: StaticJsValue = realm.types.undefined,
      ) {
        const obj = value.toObject();

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
        value: StaticJsValue = realm.types.undefined,
        proto: StaticJsValue = realm.types.undefined,
      ) {
        const obj = value.toObject();

        if (!isStaticJsObjectLike(value) && !isStaticJsNull(value)) {
          // FIXME: throw real error.
          throw new TypeError("Object prototype may only be an Object or null");
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
            realm.types.string("Object is not extensible"),
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
