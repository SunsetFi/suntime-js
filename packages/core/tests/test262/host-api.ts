import {
  createTimeBoundTaskRunner,
  StaticJsRealm,
  StaticJsObject,
  StaticJsPropertyKey,
  StaticJsProxyHandlers,
  StaticJsCallable,
  isStaticJsObject,
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  StaticJsValue,
} from "../../src/index.js";
import { isStaticJsCallable } from "../../src/runtime/types/StaticJsCallable.js";

import { ScriptTimeout } from "./timeouts.js";

export default function createHostApi(
  realm: StaticJsRealm,
  accessRealm: StaticJsRealm = realm,
): StaticJsObject {
  const hostDefinedProperty = {
    writable: true,
    configurable: true,
    enumerable: false,
  } as const;

  realm.global.defineOwnPropertySync("print", {
    ...hostDefinedProperty,
    value: realm.types.toStaticJsValue((value: string) => console.log(value)),
  });

  // The wrapping of one realm to another will create a restricted access proxy,
  // so instead create a full access proxy to whatever the root realm was.
  const global =
    realm !== accessRealm ? createFullAccessProxy(realm.global, accessRealm) : realm.global;

  let $262: StaticJsObject = realm.types.object({
    createRealm: {
      ...hostDefinedProperty,
      value: realm.types.toStaticJsValue(() => {
        const newrealm = StaticJsRealm({
          // This timeout is a little weird, as we are a sub-realm from the main
          // test
          runTask: createTimeBoundTaskRunner({ maxRunTime: ScriptTimeout }),
        });

        console.log("createRealm()");
        return createHostApi(newrealm, accessRealm);
      }),
    },
    detatchArrayBuffer: {
      ...hostDefinedProperty,
      value: realm.types.toStaticJsValue(() => {
        throw new Error("Not implemented: detatchArrayBuffer");
      }),
    },
    evalScript: {
      ...hostDefinedProperty,
      value: realm.types.toStaticJsValue((code: string) => {
        return realm.evaluateScriptSync(code);
      }),
    },
    gc: {
      ...hostDefinedProperty,
      value: realm.types.toStaticJsValue(() => {
        throw new Error("No garbage collection mechanism implemented");
      }),
    },
    global: {
      ...hostDefinedProperty,
      value: global,
    },
  });

  realm.global.defineOwnPropertySync("$262", {
    ...hostDefinedProperty,
    value: $262,
  });

  if (realm !== accessRealm) {
    console.log("Proxying $262 for access realm");
    $262 = createFullAccessProxy($262, accessRealm);
  }
  return $262;
}

function createFullAccessProxy(source: StaticJsObject, targetRealm: StaticJsRealm): StaticJsObject {
  const valueCache = new WeakMap<StaticJsValue, StaticJsValue>();
  function convertValue<T extends StaticJsValue>(value: T): T {
    if (valueCache.has(value)) {
      return valueCache.get(value)! as T;
    }

    if (isStaticJsObject(value)) {
      const proxy = createFullAccessProxy(value, targetRealm);
      valueCache.set(value, proxy);
      return proxy as T;
    } else {
      const converted = targetRealm.types.toStaticJsValue(value.toNative());
      valueCache.set(value, converted);
      return converted as T;
    }
  }

  const target = isStaticJsCallable(source)
    ? targetRealm.types.function(
        "<proxied>",
        function* () {
          return targetRealm.types.undefined;
        },
        { isConstructor: source.isConstructor },
      )
    : targetRealm.types.object();
  function* syncProp(key: StaticJsPropertyKey) {
    const desc = yield* source.getOwnPropertyEvaluator(key);
    if (desc) {
      if (isStaticJsDataPropertyDescriptor(desc)) {
        desc.value = convertValue(desc.value);
      } else if (isStaticJsAccessorPropertyDescriptor(desc)) {
        if (desc.get) {
          desc.get = convertValue(desc.get) as StaticJsCallable;
        }
        if (desc.set) {
          desc.set = convertValue(desc.set) as StaticJsCallable;
        }
      }
      yield* target.defineOwnPropertyEvaluator(key, desc);
    } else {
      yield* target.deleteEvaluator(key);
    }
  }

  function* syncProps() {
    console.log("syncProps");
    const keys = yield* source.ownPropertyKeysEvaluator();
    for (const key of keys) {
      yield* syncProp(key);
    }

    const targetKeys = yield* target.ownPropertyKeysEvaluator();
    for (const key of targetKeys) {
      if (!keys.includes(key)) {
        yield* target.deleteEvaluator(key);
      }
    }
  }

  const handlers: StaticJsProxyHandlers = {
    *defineProperty(_target, key, desc) {
      const result = yield* source.defineOwnPropertyEvaluator(key, desc);
      if (result) {
        yield* syncProp(key);
      }
      return result;
    },
    *deleteProperty(_target, key) {
      const result = yield* source.deleteEvaluator(key);
      if (result) {
        yield* syncProp(key);
      }
      return result;
    },
    *get(_target, key, receiver) {
      yield* syncProp(key);
      return yield* target.getEvaluator(key, receiver);
    },
    *getOwnPropertyDescriptor(_target, key) {
      yield* syncProp(key);
      return yield* target.getOwnPropertyEvaluator(key);
    },
    *getPrototypeOf(_target) {
      const proto = yield* source.getPrototypeOfEvaluator();
      yield* target.setPrototypeOfEvaluator(proto);
      return yield* target.getPrototypeOfEvaluator();
    },
    *isExtensible(_target) {
      return yield* source.isExtensibleEvaluator();
    },
    *ownKeys(_target) {
      yield* syncProps();
      return yield* target.ownPropertyKeysEvaluator();
    },
    *preventExtensions(_target) {
      yield* syncProps();
      return yield* target.preventExtensionsEvaluator();
    },
    *has(_target, key) {
      yield* syncProp(key);
      return yield* target.hasOwnPropertyEvaluator(key);
    },
    *set(_target, key, value, receiver) {
      yield* syncProp(key);
      return yield* target.setEvaluator(key, value, receiver);
    },
    *setPrototypeOf(_target, _prototype) {
      // TODO: Go backwards into the source?
      throw new Error("Not implemented: setPrototypeOf on full access proxy");
    },
  };

  if (isStaticJsCallable(source)) {
    handlers.apply = function* (_target, thisArgument, argArray) {
      // FIXME: Reverse convert args
      const result = source.callSync(thisArgument, argArray);
      return convertValue(result);
    };
    handlers.construct = function* (_target, argArray, newTarget) {
      // FIXME: Reverse convert args
      const result = source.constructSync(argArray, newTarget);
      return convertValue(result);
    };
  }

  return targetRealm.types.proxy(target, handlers);
}
