import { StaticJsGlobalEnvironmentRecord } from "../../environments/implementation/index.js";
import { StaticJsEnvironment } from "../../environments/index.js";

// We have to import these directly to avoid circular refs.
import {
  StaticJsObject,
  StaticJsNumber,
  StaticJsUndefined,
  StaticJsValue,
  StaticJsObjectPropertyDescriptor,
} from "../../primitives/index.js";

export interface StaticJsEnvRealmGlobalDecl {
  properties: Record<string, StaticJsObjectPropertyDescriptor>;
  extensible?: boolean;
}
export interface StaticJsEnvRealmGlobalValue {
  value: unknown;
}

export interface StaticJsEnvRealmOptions {
  globalThis?: { value: unknown };
  globalObject?: StaticJsEnvRealmGlobalDecl | StaticJsEnvRealmGlobalValue;
}

export default class StaticJsEnvRealm {
  private readonly _globalObject: StaticJsObject;
  private readonly _environment: StaticJsEnvironment;

  static getGlobalObjectProperties(): Record<
    string,
    StaticJsObjectPropertyDescriptor
  > {
    return {
      Infinity: { value: StaticJsNumber(Infinity) },
      NaN: { value: StaticJsNumber(NaN) },
      undefined: { value: StaticJsUndefined() },
    };
  }

  constructor({ globalObject, globalThis }: StaticJsEnvRealmOptions = {}) {
    const globalThisResolved = globalThis
      ? StaticJsValue(globalThis.value)
      : StaticJsUndefined();

    let globalObjectResolved: StaticJsObject;
    if (!globalObject) {
      globalObjectResolved = StaticJsObject();
    } else if (globalObject && "value" in globalObject) {
      globalObjectResolved = StaticJsObject(null, {
        prototype: StaticJsValue(globalObject.value),
      });
    } else if (globalObject && "properties" in globalObject) {
      globalObjectResolved = StaticJsObject();
      for (const [name, descriptor] of Object.entries(
        globalObject.properties,
      )) {
        globalObjectResolved.defineProperty(name, descriptor);
      }
    } else {
      throw new Error("Invalid globalObject");
    }

    for (const [name, descriptor] of Object.entries(
      StaticJsEnvRealm.getGlobalObjectProperties(),
    )) {
      globalObjectResolved.defineProperty(name, descriptor);
    }

    if (!globalObjectResolved.hasProperty("globalThis")) {
      globalObjectResolved.defineProperty("globalThis", {
        value: globalThisResolved,
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }
    if (!globalObjectResolved.hasProperty("global")) {
      globalObjectResolved.defineProperty("global", {
        value: globalObjectResolved,
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }

    this._globalObject = globalObjectResolved;

    this._environment = new StaticJsGlobalEnvironmentRecord(
      globalThisResolved,
      globalObjectResolved,
    );
  }

  get strict() {
    // TODO: Support "use strict";
    return true;
  }

  get globalObject() {
    return this._globalObject;
  }

  get globalEnv() {
    return this._environment;
  }
}
