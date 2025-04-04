import { Writable } from "type-fest";

import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { StaticJsGlobalEnvironmentRecord } from "../../environments/implementation/index.js";
import { StaticJsEnvironment } from "../../environments/index.js";

import {
  createConstructors,
  createPrototypes,
  Constructors,
} from "../../types/intrinsics/index.js";
import StaticJsTypeFactoryImpl from "../../types/implementation/StaticJsTypeFactoryImpl.js";
import StaticJsTypeFactory from "../../types/interfaces/StaticJsTypeFactory.js";
import {
  StaticJsObject,
  StaticJsObjectPropertyDescriptorGetter,
  StaticJsObjectPropertyDescriptorValue,
} from "../../types/interfaces/StaticJsObject.js";
import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import { StaticJsRealmOptions } from "../factories/StaticJsRealm.js";

import StaticJsRealm from "../interfaces/StaticJsRealm.js";
import StaticJsModule from "../interfaces/StaticJsModule.js";
import StaticJsExternalModuleImpl from "./StaticJsModuleImpl.js";

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
        const descr: Writable<
          StaticJsObjectPropertyDescriptorGetter &
            StaticJsObjectPropertyDescriptorValue
        > = {
          configurable: descriptor.configurable ?? false,
          enumerable: descriptor.enumerable ?? false,
          writable: descriptor.writable ?? false,
        };

        if (descriptor.value) {
          descr.value = this._typeFactory.toStaticJsValue(descriptor.value);
        } else {
          const types = this._typeFactory;
          const { get, set } = descriptor;

          if (get) {
            descr.get = function* () {
              let value = get();
              if (
                value &&
                typeof value === "object" &&
                "next" in value &&
                typeof value.next === "function"
              ) {
                value = yield* value as EvaluationGenerator<unknown>;
              }

              return types.toStaticJsValue(value);
            };
          }

          if (set) {
            descr.set = function* (value: StaticJsValue) {
              const setResult = set(value);
              if (
                setResult &&
                typeof setResult === "object" &&
                "next" in setResult &&
                typeof setResult.next === "function"
              ) {
                yield* setResult as EvaluationGenerator<void>;
              }
            };
          }
        }

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

    globalObject.defineProperty("undefined", {
      value: this._typeFactory.undefined,
      writable: false,
      enumerable: false,
      configurable: false,
    });

    globalObject.defineProperty("NaN", {
      value: this._typeFactory.NaN,
      writable: false,
      enumerable: false,
      configurable: false,
    });

    globalObject.defineProperty("Infinity", {
      value: this._typeFactory.Infinity,
      writable: false,
      enumerable: false,
      configurable: false,
    });

    globalObject.defineProperty("String", {
      value: constructors.stringCtor,
      writable: true,
      enumerable: false,
      configurable: true,
    });

    globalObject.defineProperty("Number", {
      value: constructors.numberCtor,
      writable: true,
      enumerable: false,
      configurable: true,
    });

    globalObject.defineProperty("Boolean", {
      value: constructors.booleanCtor,
      writable: true,
      enumerable: false,
      configurable: true,
    });

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
