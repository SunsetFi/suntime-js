import { Writable } from "type-fest";

import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { StaticJsGlobalEnvironmentRecord } from "../../environments/implementation/index.js";
import { StaticJsEnvironment } from "../../environments/index.js";

import {
  createConstructors,
  createPrototypes,
  defineGlobalProperties,
} from "../../intrinsics/index.js";
import StaticJsTypeFactoryImpl from "../../types/implementation/StaticJsTypeFactoryImpl.js";
import StaticJsTypeFactory, {
  Constructors,
} from "../../types/interfaces/StaticJsTypeFactory.js";
import { StaticJsObject } from "../../types/interfaces/StaticJsObject.js";
import {
  StaticJsAccessorPropertyDescriptor,
  StaticJsDataPropertyDescriptor,
  StaticJsPropertyDescriptor,
  validateStaticJsPropertyDescriptor,
} from "../../types/interfaces/StaticJsPropertyDescriptor.js";
import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import {
  StaticJsRealmGlobalDeclProperty,
  StaticJsRealmOptions,
} from "../factories/StaticJsRealm.js";

import StaticJsRealm from "../interfaces/StaticJsRealm.js";
import StaticJsModule from "../interfaces/StaticJsModule.js";
import StaticJsExternalModuleImpl from "./StaticJsModuleImpl.js";
import hasOwnProperty from "../../../internal/has-own-property.js";
import StaticJsExternalFunction from "../../types/implementation/StaticJsExternalFunction.js";

export default class StaticJsRealmImpl implements StaticJsRealm {
  private readonly _globalObject: StaticJsObject;
  private readonly _globalEnv: StaticJsEnvironment;
  private readonly _typeFactory: StaticJsTypeFactory;

  private readonly _modules = new Map<string, StaticJsModule>();

  constructor({
    globalObject,
    globalThis,
    modules,
  }: StaticJsRealmOptions = {}) {
    // Note: We could check to see if globalObject has factories or prototypes and use them
    // instead of these.
    const protos = createPrototypes(this);
    const ctors = createConstructors(this, protos);
    this._typeFactory = new StaticJsTypeFactoryImpl(this, protos);

    // It would be nice to compute these outside in the function, but most of these rely on the type factory,
    // and the type factory relies on having a reference to StaticJsRealm.

    let globalObjectResolved: StaticJsObject;
    if (!globalObject) {
      globalObjectResolved = this._typeFactory.object();
    } else if (globalObject && "value" in globalObject) {
      const value = globalObject.value;
      if (!value || typeof value !== "object") {
        throw new Error("Invalid global object value.  Must be an object.");
      }

      const staticJsValue = this._typeFactory.toStaticJsValue(value);

      // Make our object be the prototype, so we can freely attach our globals.
      // FIXME: This is suprising from the user's perspective, since it has an appreciable effect on the runtime.
      // We used to have a special global that passively adds the objects.  Reconsider doing that again.
      globalObjectResolved = this._typeFactory.object(undefined, staticJsValue);
    } else if (globalObject && "properties" in globalObject) {
      globalObjectResolved = this._typeFactory.object();
      for (const [name, descriptor] of Object.entries(
        globalObject.properties,
      )) {
        const descr = globalDeclToDescriptor(this, descriptor);

        globalObjectResolved.defineProperty(name, descr);
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

    this._globalEnv = new StaticJsGlobalEnvironmentRecord(
      this,
      globalThisResolved,
      globalObjectResolved,
    );

    for (const [name, moduleDef] of Object.entries(modules ?? {})) {
      let moduleInstance: StaticJsModule;
      if (moduleDef.exports) {
        moduleInstance = new StaticJsExternalModuleImpl(
          this,
          moduleDef.exports,
        );
      } else {
        throw new Error(
          `Module ${name} does not have an exports object.  Cannot create module.`,
        );
      }

      this._modules.set(name, moduleInstance);
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
    return this._globalEnv;
  }

  get types() {
    return this._typeFactory;
  }

  get modules() {
    return this._modules;
  }

  private _setupGlobalObject(
    globalObject: StaticJsObject,
    globalThis: StaticJsValue,
    constructors: Constructors,
  ) {
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

    defineGlobalProperties(this, globalObject, constructors);
  }
}

function globalDeclToDescriptor(
  realm: StaticJsRealm,
  descriptor: StaticJsRealmGlobalDeclProperty,
) {
  const descr: Writable<
    Partial<StaticJsAccessorPropertyDescriptor & StaticJsDataPropertyDescriptor>
  > = {
    configurable: descriptor.configurable ?? false,
    enumerable: descriptor.enumerable ?? false,
  };

  if (hasOwnProperty(descriptor, "value")) {
    descr.value = realm.types.toStaticJsValue(descriptor.value);
    descr.writable = hasOwnProperty(descriptor, "writable")
      ? Boolean(descriptor.writable)
      : false;
  } else if (
    hasOwnProperty(descriptor, "get") ||
    hasOwnProperty(descriptor, "set")
  ) {
    const { get, set } = descriptor as {
      get?: () => unknown | EvaluationGenerator<unknown>;
      set?: (value: unknown) => void | EvaluationGenerator<void>;
    };

    if (typeof get === "function") {
      descr.get = new StaticJsExternalFunction(realm, "get", function* () {
        let value = get();
        if (isIterator(value)) {
          value = yield* value;
        }

        // ExternalFunction wraps this for us.
        return value;
      });
    }

    if (typeof set === "function") {
      descr.set = new StaticJsExternalFunction(realm, "set", function* (
        value: unknown,
      ) {
        const setResult = set(value);
        if (isIterator(setResult)) {
          yield* setResult;
        }
      });
    }
  }

  validateStaticJsPropertyDescriptor(descr);
  return descr as StaticJsPropertyDescriptor;
}

function isIterator<T>(obj: unknown): obj is Generator<T, unknown, unknown> {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as Generator<T>).next === "function"
  );
}
