import typedEntries from "../../../internal/typed-entries.js";
import { StaticJsGlobalEnvironmentRecord } from "../../environments/implementation/index.js";
import { StaticJsEnvironment } from "../../environments/index.js";

import { createGlobals } from "../../globals/create-globals.js";
import {
  createConstructors,
  createPrototypes,
  Constructors,
} from "../../types/intrinsics/index.js";
import StaticJsTypeFactoryImpl from "../../types/implementation/StaticJsTypeFactoryImpl.js";

// We have to import these directly to avoid circular refs.
import {
  StaticJsObject,
  StaticJsValue,
  StaticJsObjectPropertyDescriptor,
} from "../../types/index.js";
import StaticJsTypeFactory from "../../types/interfaces/StaticJsTypeFactory.js";

export interface StaticJsEnvRealmGlobalDecl {
  properties: Record<string, StaticJsObjectPropertyDescriptor>;
  extensible?: boolean;
}
export interface StaticJsEnvRealmGlobalValue {
  value: object;
}

export interface StaticJsEnvRealmOptions {
  globalThis?: { value: unknown };
  globalObject?: StaticJsEnvRealmGlobalDecl | StaticJsEnvRealmGlobalValue;
}

export default class StaticJsRealmImpl {
  private readonly _globalObject: StaticJsObject;
  private readonly _environment: StaticJsEnvironment;
  private readonly _typeFactory: StaticJsTypeFactory;

  constructor({ globalObject, globalThis }: StaticJsEnvRealmOptions = {}) {
    const protos = createPrototypes(this);
    const ctors = createConstructors(this, protos);
    this._typeFactory = new StaticJsTypeFactoryImpl(this, protos);

    let globalObjectResolved: StaticJsObject;
    if (!globalObject) {
      globalObjectResolved = this._typeFactory.createObject();
    } else if (globalObject && "value" in globalObject) {
      const value = globalObject.value;
      if (!value || typeof value !== "object") {
        throw new Error("Invalid global object value.  Must be an object.");
      }

      const staticJsValue = this._typeFactory.toStaticJsValue(value);

      // Make our object be the prototype, so we can freely attach our globals.
      // FIXME: This is suprising from the user's perspective, since it has an appreciable effect on the runtime.
      // We used to have a special global that passively adds the objects.  Reconsider doing that again.
      globalObjectResolved = this._typeFactory.createObject(
        undefined,
        staticJsValue,
      );
    } else if (globalObject && "properties" in globalObject) {
      globalObjectResolved = this._typeFactory.createObject();
      for (const [name, descriptor] of Object.entries(
        globalObject.properties,
      )) {
        globalObjectResolved.defineProperty(name, descriptor);
      }
    } else {
      throw new Error("Invalid globalObject");
    }

    let globalThisResolved: StaticJsValue;
    if (globalThis) {
      globalThisResolved = this._typeFactory.toStaticJsValue(globalThis.value);
    } else {
      globalThisResolved = globalObjectResolved;
    }

    this._setupGlobalObject(globalObjectResolved, globalThisResolved, ctors);

    this._globalObject = globalObjectResolved;

    this._environment = new StaticJsGlobalEnvironmentRecord(
      this,
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

  get types() {
    return this._typeFactory;
  }

  private _setupGlobalObject(
    globalObject: StaticJsObject,
    globalThis: StaticJsValue,
    constructors: Constructors,
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

    globalObject.defineProperty("Object", {
      value: constructors.objectCtor,
      writable: true,
      enumerable: false,
      configurable: true,
    });

    globalObject.defineProperty("Array", {
      value: constructors.arrayCtor,
      writable: true,
      enumerable: false,
      configurable: true,
    });

    globalObject.defineProperty("Function", {
      value: constructors.functionCtor,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
}
