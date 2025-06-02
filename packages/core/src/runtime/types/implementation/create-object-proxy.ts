import type { StaticJsObjectLike } from "../StaticJsObject.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";

export default function createStaticJsObjectLikeProxy(
  obj: StaticJsObjectLike,
  target: object = {},
  additionalTraps: ProxyHandler<object> = {},
): unknown {
  const getOwnPropertyDescriptor = (propertyName: string) => {
    if (typeof propertyName !== "string") {
      // Dont yet support symbols.
      return undefined;
    }

    const descriptor = obj.getOwnPropertyDescriptor(propertyName);
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
        (target as any)[propertyName] = obj.getProperty(propertyName).toJs();
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
          return obj.getProperty(propertyName).toJs();
        };
      }
      if (descriptor.set) {
        jsDescriptor.set = (value: unknown) => {
          const staticJsValue = obj.realm.types.toStaticJsValue(value);
          obj.setProperty(propertyName, staticJsValue, false);
        };
      } else {
        // Huh... This needs to be set apparently.
        // FIXME: Should we define this explicity in our engine object get descriptor?
        jsDescriptor.set = undefined;
      }
    } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
      jsDescriptor.writable = descriptor.writable;
      jsDescriptor.value = obj.getProperty(propertyName).toJs();
    }

    // Proxy is incredibly stupid in that it forces you to have the target match.
    // So like, what's the point...
    // Just... set it now.  Whatever.
    Object.defineProperty(target, propertyName, jsDescriptor);

    return jsDescriptor;
  };

  const ownKeys = () => {
    const keys = obj.getOwnKeys();
    for (const key of keys) {
      // Do this to poke the descriptors...
      // Sigh...
      getOwnPropertyDescriptor(key);
    }
    return keys;
  };

  return new Proxy(target, {
    get(_target, p) {
      if (typeof p !== "string") {
        // Don't yet support symbols.
        return undefined;
      }

      const descr = getOwnPropertyDescriptor(p);
      if (!descr) {
        return undefined;
      }

      if (descr.value !== undefined) {
        return descr.value;
      } else if (descr.get) {
        return descr.get();
      }

      return undefined;
    },
    ownKeys,
    getOwnPropertyDescriptor: (_target, p) => {
      if (typeof p !== "string") {
        // Don't yet support symbols.
        return undefined;
      }

      return getOwnPropertyDescriptor(p);
    },
    has(_target, p) {
      if (typeof p !== "string") {
        // Don't yet support symbols.
        return false;
      }
      return getOwnPropertyDescriptor(p) !== undefined;
    },
    // TODO: Writable traps
    defineProperty() {
      return false;
    },
    deleteProperty() {
      return false;
    },
    isExtensible() {
      return false;
    },
    preventExtensions() {
      return true;
    },
    set() {
      return false;
    },
    setPrototypeOf() {
      return false;
    },
    getPrototypeOf() {
      return Object.prototype;
    },
    apply() {
      // FIXME: It might be!!!
      // We need to make Function ObjectLikes handle this!
      throw new TypeError("Object is not a function.");
    },
    construct() {
      throw new TypeError("Object is not a constructor.");
    },
    ...additionalTraps,
  });
}
