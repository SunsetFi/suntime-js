import hasOwnProperty from "../../../internal/has-own-property.js";

import { StaticJsGlobalEnvironmentRecord } from "../../environments/implementation/index.js";
import { StaticJsEnvironment } from "../../environments/index.js";

import {
  StaticJsGlobalObject,
  StaticJsGlobalObjectPropertyDecl,
} from "../../primitives/implementation/index.js";

// We have to import these directly to avoid circular refs.
import {
  StaticJsObject,
  StaticJsNumber,
  StaticJsUndefined,
  StaticJsValue,
} from "../../primitives/index.js";

export interface StaticJsEnvGlobalPropertyDecl {
  value: unknown;
  // TODO:
  // writable?: boolean;
  // enumerable?: boolean;
  // configurable?: boolean;
}
export interface StaticJsEnvGlobalDecl {
  properties: Record<string, StaticJsEnvGlobalPropertyDecl>;
}
export interface StaticJsEnvGlobalValue {
  value: StaticJsObject;
}

export interface StaticJsEnvRealmOptions {
  globalThis?: { value: unknown };
  globalObject?: StaticJsEnvGlobalDecl | StaticJsEnvGlobalValue;
}

export default class StaticJsEnvRealm {
  private readonly _globalObject: StaticJsObject;
  private readonly _environment: StaticJsEnvironment;

  static getGlobalObjectProperties(): Record<
    string,
    StaticJsEnvGlobalPropertyDecl
  > {
    return {
      Infinity: { value: StaticJsNumber(Infinity) },
      NaN: { value: StaticJsNumber(NaN) },
      undefined: { value: StaticJsUndefined() },
    };
  }

  constructor({ globalObject, globalThis }: StaticJsEnvRealmOptions = {}) {
    let globalObjectResolved: StaticJsObject | null = null;

    let globalObjectDecl: StaticJsEnvGlobalDecl = { properties: {} };
    if (globalObject) {
      if ("properties" in globalObject) {
        globalObjectDecl = globalObject;
      } else if ("value" in globalObject) {
        globalObjectResolved = globalObject.value;
      }
    }

    if (!globalObjectResolved) {
      globalObjectResolved = StaticJsObject();
    }

    const resolvedGlobalObjectDecl = {
      ...globalObjectDecl,
      properties: {
        ...StaticJsEnvRealm.getGlobalObjectProperties(),
        ...globalObjectDecl?.properties,
      },
    };

    const passives: Record<string, StaticJsGlobalObjectPropertyDecl> = {
      global: { value: globalObjectResolved },
    };

    passives.globalThis = {
      value: StaticJsValue(
        globalThis ? globalThis.value : resolvedGlobalObjectDecl,
      ),
    };

    for (const [name, { value }] of Object.entries(
      resolvedGlobalObjectDecl.properties,
    )) {
      const staticJsValue = StaticJsValue(value);
      passives[name] = { value: staticJsValue };
    }

    this._globalObject = globalObjectResolved = new StaticJsGlobalObject(
      globalObjectResolved,
      passives,
    );

    let globalThisResolved: StaticJsValue = this._globalObject;
    if (globalThis) {
      if (!hasOwnProperty(globalThis, "value")) {
        throw new Error("globalThis.value must be a StaticJsValue");
      }

      globalThisResolved = StaticJsValue(globalThis.value);
    }

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
