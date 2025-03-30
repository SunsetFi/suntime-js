import typedEntries from "../../../internal/typed-entries.js";
import { StaticJsGlobalEnvironmentRecord } from "../../environments/implementation/index.js";
import { StaticJsEnvironment } from "../../environments/index.js";

import { createGlobals } from "../../globals/create-globals.js";

// We have to import these directly to avoid circular refs.
import {
  StaticJsObject,
  StaticJsUndefined,
  StaticJsValue,
  StaticJsObjectPropertyDescriptor,
} from "../../types/index.js";

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

    this._setupGlobalObject(globalObjectResolved, globalThisResolved);

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

  private _setupGlobalObject(
    globalObject: StaticJsObject,
    globalThis: StaticJsValue,
  ) {
    for (const [key, value] of typedEntries(createGlobals())) {
      if (!globalObject.hasProperty(key)) {
        globalObject.defineProperty(key, value);
      }
    }

    if (!globalObject.hasProperty("globalThis")) {
      globalObject.defineProperty("globalThis", {
        value: globalThis,
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }
    if (!globalObject.hasProperty("global")) {
      globalObject.defineProperty("global", {
        value: globalObject,
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }
  }
}
