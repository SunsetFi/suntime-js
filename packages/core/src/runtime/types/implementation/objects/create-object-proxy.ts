import { properrtyDescriptorToJs } from "../../../utils/property-descriptor-to-js.js";

import type { StaticJsValue } from "../../StaticJsValue.js";
import type { StaticJsObjectLike } from "../../StaticJsObjectLike.js";
import type { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";
import {
  isStaticJsDataPropertyDescriptor,
  type StaticJsPropertyDescriptorRecord,
} from "../../StaticJsPropertyDescriptor.js";
import { isStaticJsSymbol } from "../../StaticJsSymbol.js";

const ProxyOwnerKey = Symbol("StaticJsObjectLikeProxyOwner");

export type StaticJsObjectProxyTarget = (object | ((...args: unknown[]) => unknown)) & {
  [key: PropertyKey]: unknown;
};

export function getStaticJsObjectLikeProxyOwner(proxy: unknown): StaticJsValue | null {
  if (proxy && typeof proxy === "object" && ProxyOwnerKey in proxy) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (proxy as any)[ProxyOwnerKey] as StaticJsValue;
  }
  return null;
}

export function createStaticJsObjectLikeProxy(
  obj: StaticJsObjectLike,
  target: StaticJsObjectProxyTarget = {},
  additionalTraps: ProxyHandler<StaticJsObjectProxyTarget> = {},
): unknown {
  const getOwnPropertyDescriptor = (propertyName: string | symbol) => {
    let staticJsPropertyKey: StaticJsPropertyKey;
    if (typeof propertyName === "symbol") {
      staticJsPropertyKey = obj.realm.types.toStaticJsValue(propertyName);
    } else {
      staticJsPropertyKey = propertyName;
    }

    const descriptor = obj.getOwnPropertySync(staticJsPropertyKey);
    if (!descriptor) {
      return undefined;
    }

    // Proxy requires the target object descriptor to be kept in sync.
    const existingDef = Object.getOwnPropertyDescriptor(target, propertyName);
    if (existingDef && !existingDef.configurable) {
      if (isStaticJsDataPropertyDescriptor(descriptor) && descriptor.writable) {
        target[propertyName] = obj.getSync(staticJsPropertyKey).toJsSync();
        return Object.getOwnPropertyDescriptor(target, propertyName);
      }
      return existingDef;
    }

    const jsDescriptor = properrtyDescriptorToJs(descriptor, obj.realm);

    Object.defineProperty(target, propertyName, jsDescriptor);

    return jsDescriptor;
  };

  const ownKeys = () => {
    const keys = obj.ownPropertyKeysSync().map((key) => {
      if (isStaticJsSymbol(key)) {
        return key.toJsSync() as symbol;
      }
      return key;
    });

    for (const key of keys) {
      // Do this to poke the descriptors...
      // Sigh...
      getOwnPropertyDescriptor(key);
    }

    return keys;
  };

  return new Proxy(target, {
    get(_target, p) {
      // Apparently we can add extra properties from get
      // without having to mess around with the descriptors.
      if (p === ProxyOwnerKey) {
        return obj;
      }

      const descr = getOwnPropertyDescriptor(p);
      if (descr) {
        if (descr.value !== undefined) {
          return descr.value;
        } else if (descr.get) {
          return descr.get();
        }
      }

      // Delegate to the prototype proxy.
      const proto = obj.getPrototypeOfSync()?.toJsSync();
      if (proto) {
        return Reflect.get(proto, p);
      }

      return undefined;
    },
    ownKeys,
    getOwnPropertyDescriptor: (_target, p) => {
      return getOwnPropertyDescriptor(p);
    },
    has(_target, p) {
      if (p === ProxyOwnerKey) {
        return true;
      }

      const descr = getOwnPropertyDescriptor(p);
      if (descr) {
        return true;
      }

      // Delegate to the prototype proxy.
      const proto = obj.getPrototypeOfSync()?.toJsSync();
      if (proto) {
        return Reflect.has(proto, p);
      }

      return false;
    },
    defineProperty(_target, p, descriptor) {
      let staticJsPropertyKey: StaticJsPropertyKey;
      if (typeof p === "symbol") {
        staticJsPropertyKey = obj.realm.types.toStaticJsValue(p);
      } else {
        staticJsPropertyKey = p;
      }

      if (descriptor.get || descriptor.set) {
        const sjsDescriptor: StaticJsPropertyDescriptorRecord = {
          configurable: descriptor.configurable ?? false,
          enumerable: descriptor.enumerable ?? false,
          get: descriptor.get ? obj.realm.types.toStaticJsValue(descriptor.get) : undefined,
          set: descriptor.set ? obj.realm.types.toStaticJsValue(descriptor.set) : undefined,
        };
        obj.defineOwnPropertySync(staticJsPropertyKey, sjsDescriptor);
      } else {
        const sjsDescriptor: StaticJsPropertyDescriptorRecord = {
          configurable: descriptor.configurable ?? false,
          enumerable: descriptor.enumerable ?? false,
          writable: descriptor.writable ?? false,
          value: obj.realm.types.toStaticJsValue(descriptor.value),
        };
        obj.defineOwnPropertySync(staticJsPropertyKey, sjsDescriptor);
      }

      return false;
    },
    deleteProperty(_target, p) {
      let staticJsPropertyKey: StaticJsPropertyKey;
      if (typeof p === "symbol") {
        staticJsPropertyKey = obj.realm.types.toStaticJsValue(p);
      } else {
        staticJsPropertyKey = p;
      }
      obj.deleteSync(staticJsPropertyKey);
      return false;
    },
    isExtensible() {
      return obj.isExtensibleSync();
    },
    preventExtensions() {
      obj.preventExtensionsSync();
      return true;
    },
    set(_target, p, value) {
      let staticJsPropertyKey: StaticJsPropertyKey;
      if (typeof p === "symbol") {
        staticJsPropertyKey = obj.realm.types.toStaticJsValue(p);
      } else {
        staticJsPropertyKey = p;
      }
      const staticJsValue = obj.realm.types.toStaticJsValue(value);
      obj.setSync(staticJsPropertyKey, staticJsValue, false);
      // TODO: What if we aren't writable?
      return true;
    },
    setPrototypeOf() {
      return false;
    },
    getPrototypeOf() {
      const proto = obj.getPrototypeOfSync();
      if (!proto) {
        return null;
      }
      return proto.toJsSync() as object;
    },
    apply() {
      throw new TypeError("Object is not a function.");
    },
    construct() {
      throw new TypeError("Object is not a constructor.");
    },
    ...additionalTraps,
  });
}
