import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { createArrayFromList } from "#algorithms/create-array-from-list.js";
import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import typedKeys from "#utils/typed-keys.js";

import type { StaticJsCallable } from "../StaticJsCallable.js";
import type { StaticJsFunction } from "../StaticJsFunction.js";

import { isStaticJsObject, type StaticJsObject } from "../StaticJsObject.js";
import {
  propertyDescriptorToStaticJsObject,
  validateStaticJsPropertyDescriptorRecord,
} from "../StaticJsPropertyDescriptor.js";
import {
  isStaticJsPropertyKey,
  staticJsPropertyKeyToValue,
  toStaticJsPropertyKey,
} from "../StaticJsPropertyKey.js";
import {
  type StaticJsProxy,
  StaticJsProxyHandlerKeys,
  type StaticJsProxyHandlers,
  type StaticJsProxyTarget,
} from "../StaticJsProxy.js";
import { isStaticJsValue } from "../StaticJsValue.js";
import { StaticJsNativeFunctionImpl } from "./functions/StaticJsNativeFunctionImpl.js";
import { StaticJsProxyImpl } from "./StaticJsProxyImpl.js";

type StaticJsProxyHandlerFactories = {
  [K in keyof Required<StaticJsProxyHandlers>]: (
    realm: StaticJsRealm,
    func: Required<StaticJsProxyHandlers>[K],
  ) => StaticJsFunction;
};
const HostDefinedProxyHandlerFactories: StaticJsProxyHandlerFactories = {
  getPrototypeOf: (realm, func) => {
    return StaticJsNativeFunctionImpl.create(realm, "getPrototypeOf", function* (_thisArg, target) {
      const result = Reflect.apply(func, undefined, [target]);
      const evaluated = yield* EvaluationGenerator(result);
      if (evaluated === null) {
        return realm.types.null;
      }
      if (isStaticJsObject(evaluated)) {
        return evaluated;
      }
      throw new TypeError(`Proxy handler getPrototypeOf trap must return a StaticJsObject or null`);
    });
  },
  setPrototypeOf: (realm, func) => {
    return StaticJsNativeFunctionImpl.create(
      realm,
      "setPrototypeOf",
      function* (_thisArg, target, prototype) {
        const result = Reflect.apply(func, undefined, [target, prototype]);
        const evaluated = yield* EvaluationGenerator(result);
        if (typeof evaluated !== "boolean") {
          throw new TypeError(`Proxy handler setPrototypeOf trap must return a boolean`);
        }
        return realm.types.boolean(evaluated);
      },
    );
  },
  isExtensible: (realm, func) => {
    return StaticJsNativeFunctionImpl.create(realm, "isExtensible", function* (_thisArg, target) {
      const result = Reflect.apply(func, undefined, [target]);
      const evaluated = yield* EvaluationGenerator(result);
      if (typeof evaluated !== "boolean") {
        throw new TypeError(`Proxy handler isExtensible trap must return a boolean`);
      }
      return realm.types.boolean(evaluated);
    });
  },
  preventExtensions: (realm, func) => {
    return StaticJsNativeFunctionImpl.create(
      realm,
      "preventExtensions",
      function* (_thisArg, target) {
        const result = Reflect.apply(func, undefined, [target]);
        const evaluated = yield* EvaluationGenerator(result);
        if (typeof evaluated !== "boolean") {
          throw new TypeError(`Proxy handler preventExtensions trap must return a boolean`);
        }
        return realm.types.boolean(evaluated);
      },
    );
  },
  getOwnPropertyDescriptor: (realm, func) => {
    return StaticJsNativeFunctionImpl.create(
      realm,
      "getOwnPropertyDescriptor",
      function* (_thisArg, target, key) {
        const nativeKey = toStaticJsPropertyKey(key);
        const result = Reflect.apply(func, undefined, [target, nativeKey]);
        const evaluated = yield* EvaluationGenerator(result);
        if (
          evaluated !== undefined &&
          !("value" in evaluated || "get" in evaluated || "set" in evaluated)
        ) {
          throw new TypeError(
            `Proxy handler getOwnPropertyDescriptor trap must return undefined or a property descriptor record`,
          );
        }
        validateStaticJsPropertyDescriptorRecord(evaluated);
        return yield* propertyDescriptorToStaticJsObject(evaluated, realm);
      },
    );
  },
  defineProperty: (realm, func) => {
    return StaticJsNativeFunctionImpl.create(
      realm,
      "defineProperty",
      function* (_thisArg, target, key, descriptor) {
        const nativeKey = toStaticJsPropertyKey(key);
        const result = Reflect.apply(func, undefined, [target, nativeKey, descriptor]);
        const evaluated = yield* EvaluationGenerator(result);
        if (typeof evaluated !== "boolean") {
          throw new TypeError(`Proxy handler defineProperty trap must return a boolean`);
        }
        return realm.types.boolean(evaluated);
      },
    );
  },
  has: (realm, func) => {
    return StaticJsNativeFunctionImpl.create(realm, "has", function* (_thisArg, target, key) {
      const nativeKey = toStaticJsPropertyKey(key);
      const result = Reflect.apply(func, undefined, [target, nativeKey]);
      const evaluated = yield* EvaluationGenerator(result);
      if (typeof evaluated !== "boolean") {
        throw new TypeError(`Proxy handler has trap must return a boolean`);
      }
      return realm.types.boolean(evaluated);
    });
  },
  get: (realm, func) => {
    return StaticJsNativeFunctionImpl.create(
      realm,
      "get",
      function* (_thisArg, target, key, receiver) {
        const nativeKey = toStaticJsPropertyKey(key);
        const result = Reflect.apply(func, undefined, [target, nativeKey, receiver]);
        const evaluated = yield* EvaluationGenerator(result);
        if (!isStaticJsValue(evaluated)) {
          throw new TypeError(`Proxy handler get trap must return a StaticJsValue`);
        }
        return evaluated;
      },
    );
  },
  set: (realm, func) => {
    return StaticJsNativeFunctionImpl.create(
      realm,
      "set",
      function* (_thisArg, target, key, value, receiver) {
        const nativeKey = toStaticJsPropertyKey(key);
        const result = Reflect.apply(func, undefined, [target, nativeKey, value, receiver]);
        const evaluated = yield* EvaluationGenerator(result);
        if (typeof evaluated !== "boolean") {
          throw new TypeError(`Proxy handler set trap must return a boolean`);
        }
        return realm.types.boolean(evaluated);
      },
    );
  },
  deleteProperty: (realm, func) => {
    return StaticJsNativeFunctionImpl.create(
      realm,
      "deleteProperty",
      function* (_thisArg, target, key) {
        const nativeKey = toStaticJsPropertyKey(key);
        const result = Reflect.apply(func, undefined, [target, nativeKey]);
        const evaluated = yield* EvaluationGenerator(result);
        if (typeof evaluated !== "boolean") {
          throw new TypeError(`Proxy handler deleteProperty trap must return a boolean`);
        }
        return realm.types.boolean(evaluated);
      },
    );
  },
  ownKeys: (realm, func) => {
    return StaticJsNativeFunctionImpl.create(realm, "ownKeys", function* (_thisArg, target) {
      const result = Reflect.apply(func, undefined, [target]);
      const evaluated = yield* EvaluationGenerator(result);
      if (!Array.isArray(evaluated) || !evaluated.some(isStaticJsPropertyKey)) {
        throw new TypeError(
          `Proxy handler ownKeys trap must return an array of StaticJsPropertyKey values`,
        );
      }
      const array = yield* createArrayFromList(
        evaluated.map((key) => staticJsPropertyKeyToValue(key, realm)),
      );
      return array;
    });
  },
  apply: (realm, func) => {
    return StaticJsNativeFunctionImpl.create(
      realm,
      "apply",
      function* (_thisArg, target, thisArgument, argArray) {
        const result = Reflect.apply(func, undefined, [target, thisArgument, argArray]);
        const evaluated = yield* EvaluationGenerator(result);
        if (!isStaticJsValue(evaluated)) {
          throw new TypeError(`Proxy handler apply trap must return a StaticJsValue`);
        }
        return evaluated;
      },
    );
  },
  construct: (realm, func) => {
    return StaticJsNativeFunctionImpl.create(
      realm,
      "construct",
      function* (_thisArg, target, argArray, newTarget) {
        const result = Reflect.apply(func, undefined, [target, argArray, newTarget]);
        const evaluated = yield* EvaluationGenerator(result);
        if (!isStaticJsObject(evaluated)) {
          throw new TypeError(`Proxy handler construct trap must return a StaticJsObject`);
        }
        return evaluated;
      },
    );
  },
};

export function createHostDefinedProxy(
  target: StaticJsProxyTarget,
  handlers: StaticJsProxyHandlers,
  realm: StaticJsRealm,
): StaticJsProxy {
  const handlerKeys = typedKeys(handlers);
  const unknownKey = handlerKeys.find(
    (x) => !StaticJsProxyHandlerKeys.includes(x) || typeof handlers[x] !== "function",
  );
  if (unknownKey) {
    throw new TypeError(`Invalid proxy handler key: ${unknownKey}`);
  }

  let resolvedTarget: StaticJsObject | StaticJsCallable;
  if (target === "object") {
    resolvedTarget = realm.types.object();
  } else if (target === "function") {
    resolvedTarget = realm.types.function("proxyTargetFunction", () => realm.types.undefined);
  } else if (isStaticJsObject(target)) {
    resolvedTarget = target;
  } else {
    throw new TypeError(
      `Invalid proxy target: ${target}. Must be an object, function, "object", or "function".`,
    );
  }

  let handlersResolved: Partial<Record<keyof StaticJsProxyHandlers, StaticJsFunction>> = {};
  for (const key of typedKeys(handlers)) {
    if (!Object.hasOwn(HostDefinedProxyHandlerFactories, key)) {
      throw new TypeError(`Unsupported proxy handler trap: ${key}`);
    }
    const factory = HostDefinedProxyHandlerFactories[key];
    const handler = factory(realm, handlers[key] as any);
    handlersResolved[key] = handler;
  }

  const descriptors = Object.fromEntries(
    Object.entries(handlersResolved).map(([key, value]) => [
      key,
      {
        value,
        writable: true,
        enumerable: true,
        configurable: true,
      },
    ]),
  );

  const handlersObject = realm.types.object(descriptors);

  return StaticJsProxyImpl.create(resolvedTarget, handlersObject, realm);
}
