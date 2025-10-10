import type { StaticJsValue } from "../StaticJsValue.js";
import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  type StaticJsPropertyDescriptor,
  type StaticJsAccessorPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";

const ProxyOwnerKey = Symbol("StaticJsObjectLikeProxyOwner");

export function getStaticJsObjectLikeProxyOwner(
  proxy: unknown,
): StaticJsValue | null {
  if (proxy && typeof proxy === "object" && ProxyOwnerKey in proxy) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (proxy as any)[ProxyOwnerKey] as StaticJsValue;
  }
  return null;
}

export default function createStaticJsObjectLikeProxy(
  obj: StaticJsObjectLike,
  target: object = {},
  additionalTraps: ProxyHandler<object> = {},
): unknown {
  const getOwnPropertyDescriptor = (propertyName: string | symbol) => {
    if (typeof propertyName !== "string") {
      // TODO: Support well-known symbols.
      return undefined;
    }

    const descriptor = obj.getOwnPropertyDescriptorSync(propertyName);
    if (!descriptor) {
      return undefined;
    }

    // So apparently if we can't change this WE MUST RETURN THE SAME REFERENCE
    // What even is the point of proxy objects!  They make the object have all the same values anyway!
    // What the hell is Proxy even for!  Whose use case is this!  Why force me to mantain my object identically!!!
    // The only use of this is that I can actually capture the events, and force my target up to date.
    // This is so, so, so, so stupid.
    const existingDef = Object.getOwnPropertyDescriptor(target, propertyName);
    if (existingDef && !existingDef.configurable) {
      // Well, the good news is if its not configrable, it wouldn't have been configurable
      // on the 'real' runtime object, which means it can never change.
      // HOWEVER
      // we still need to update the value if its a value descriptor!
      // SIGH.............
      if (isStaticJsDataPropertyDescriptor(descriptor) && descriptor.writable) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (target as any)[propertyName] = obj
          .getPropertySync(propertyName)
          .toJsSync();
        return Object.getOwnPropertyDescriptor(target, propertyName);
      }
      return existingDef;
    }

    const jsDescriptor: PropertyDescriptor = {};
    if (descriptor.configurable !== undefined) {
      jsDescriptor.configurable = descriptor.configurable;
    }
    if (descriptor.enumerable !== undefined) {
      jsDescriptor.enumerable = descriptor.enumerable;
    }

    if (isStaticJsAccessorPropertyDescriptor(descriptor)) {
      if (descriptor.get) {
        jsDescriptor.get = () => {
          return obj.getPropertySync(propertyName).toJsSync();
        };
      }
      if (descriptor.set) {
        jsDescriptor.set = (value: unknown) => {
          const staticJsValue = obj.realm.types.toStaticJsValue(value);
          obj.setPropertySync(propertyName, staticJsValue, false);
        };
      } else {
        // Huh... This needs to be set apparently.
        // FIXME: Should we define this explicity in our engine object get descriptor?
        jsDescriptor.set = undefined;
      }
    } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
      jsDescriptor.writable = descriptor.writable;
      jsDescriptor.value = obj.getPropertySync(propertyName).toJsSync();
    }

    // Proxy is incredibly stupid in that it forces you to have the target match.
    // So like, what's the point...
    // Just... set it now.  Whatever.
    Object.defineProperty(target, propertyName, jsDescriptor);

    return jsDescriptor;
  };

  const ownKeys = () => {
    const keys = obj.getOwnKeysSync();
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
      const proto = obj.prototype?.toJsSync();
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
      const proto = obj.prototype?.toJsSync();
      if (proto) {
        return Reflect.has(proto, p);
      }

      return false;
    },
    defineProperty(_target, p, descriptor) {
      if (typeof p !== "string") {
        // FIXME: Support symbols in the registry.
        return false;
      }

      if (descriptor.get || descriptor.set) {
        const sjsDescriptor: StaticJsAccessorPropertyDescriptor = {
          configurable: descriptor.configurable ?? false,
          enumerable: descriptor.enumerable ?? false,
        };
        if (descriptor.get) {
          sjsDescriptor.get = obj.realm.types.toStaticJsValue(descriptor.get);
        }
        if (descriptor.set) {
          sjsDescriptor.set = obj.realm.types.toStaticJsValue(descriptor.set);
        }
        obj.definePropertySync(p, sjsDescriptor);
      } else {
        const sjsDescriptor: StaticJsPropertyDescriptor = {
          configurable: descriptor.configurable ?? false,
          enumerable: descriptor.enumerable ?? false,
          writable: descriptor.writable ?? false,
          value: obj.realm.types.toStaticJsValue(descriptor.value),
        };
        obj.definePropertySync(p, sjsDescriptor);
      }

      return false;
    },
    deleteProperty(_target, p) {
      if (typeof p !== "string") {
        // FIXME: Support symbols in the registry.
        return false;
      }
      obj.deletePropertySync(p);
      return false;
    },
    isExtensible() {
      return obj.extensible;
    },
    preventExtensions() {
      obj.preventExtensionsSync();
      return true;
    },
    set(_target, p, value) {
      if (typeof p !== "string") {
        // FIXME: Support symbols in the registry.
        return false;
      }

      const staticJsValue = obj.realm.types.toStaticJsValue(value);
      obj.setPropertySync(p, staticJsValue, false);
      return false;
    },
    setPrototypeOf() {
      return false;
    },
    getPrototypeOf() {
      if (!obj.prototype) {
        return null;
      }
      return obj.prototype.toJsSync() as object;
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
