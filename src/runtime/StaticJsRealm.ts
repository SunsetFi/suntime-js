import StaticJsGlobalEnvironmentRecord from "./environments/implementation/StaticJsGlobalEnvironmentRecord.js";
import { StaticJsEnvironment } from "./environments/index.js";

// We have to import these directly to avoid circular refs.
import StaticJsEnvNumber from "./primitives/implementation/StaticJsEnvNumber.js";
import StaticJsEnvUndefined from "./primitives/implementation/StaticJsEnvUndefined.js";

import { StaticJsObject, toStaticJsValue } from "./primitives/index.js";

export interface StaticJsEnvironmentGlobal {
  value: any;
  // TODO: Writable, Configurable, and such
}

export interface StaticJsEnvironmentOptions {
  globals?: Record<string, StaticJsEnvironmentGlobal>;
}

// Clean this up and put them in some folder.
// FIXME: Declaring this ambiently causes circular refs.
const defaultGlobals: Record<string, StaticJsEnvironmentGlobal> = {
  // Technically you CAN assign these without errors but they don't change???
  Infinity: { value: new StaticJsEnvNumber(Infinity) },
  NaN: { value: new StaticJsEnvNumber(NaN) },
  // You can redefine this!
  undefined: { value: StaticJsEnvUndefined.Instance },
};

// TODO: This is possibly analogous to a 'realm'?
// https://tc39.es/ecma262/#sec-code-realms
export default class StaticJsRealm {
  private readonly _globalObject: StaticJsObject;
  private readonly _environment: StaticJsEnvironment;

  constructor({ globals }: StaticJsEnvironmentOptions = {}) {
    this._globalObject = StaticJsObject();
    this._environment = new StaticJsGlobalEnvironmentRecord(
      this._globalObject,
      this._globalObject,
    );

    const resolvedGlobals = {
      ...defaultGlobals,
      ...globals,
    };

    for (const [name, { value }] of Object.entries(resolvedGlobals)) {
      const staticJsValue = toStaticJsValue(value);
      this._globalObject.setProperty(name, staticJsValue);
    }
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
