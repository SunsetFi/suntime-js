import type { Writable } from "type-fest";
import { parse as parseAst } from "@babel/parser";

import hasOwnProperty from "../../../internal/has-own-property.js";

import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import StaticJsRuntimeError from "../../../errors/StaticJsRuntimeError.js";

import type { StaticJsEnvironment } from "../../environments/StaticJsEnvironment.js";
import StaticJsGlobalEnvironmentRecord from "../../environments/implementation/StaticJsGlobalEnvironmentRecord.js";

import type { Instrinsics } from "../../intrinsics/create-intrinsics.js";
import {
  createIntrinsics,
  defineGlobalProperties,
} from "../../intrinsics/create-intrinsics.js";

import StaticJsTypeFactoryImpl from "../../types/implementation/StaticJsTypeFactoryImpl.js";
import type StaticJsTypeFactory from "../../types/StaticJsTypeFactory.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";
import type {
  StaticJsAccessorPropertyDescriptor,
  StaticJsDataPropertyDescriptor,
  StaticJsPropertyDescriptor,
} from "../../types/StaticJsPropertyDescriptor.js";
import { validateStaticJsPropertyDescriptor } from "../../types/StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";
import StaticJsExternalFunction from "../../types/implementation/StaticJsExternalFunction.js";

import type { StaticJsModuleImplementation } from "../../modules/StaticJsModuleImplementation.js";
import {
  isStaticJsModuleImplementation,
  staticJsModuleToImplementation,
} from "../../modules/StaticJsModuleImplementation.js";
import type { StaticJsModule } from "../../modules/StaticJsModule.js";
import { isStaticJsModule } from "../../modules/StaticJsModule.js";

import StaticJsExternalModuleImpl from "../../modules/implementation/StaticJsExternalModuleImpl.js";
import { StaticJsModuleImpl } from "../../modules/implementation/StaticJsModuleImpl.js";

import type {
  StaticJsRealmGlobalDeclProperty,
  StaticJsRealmModule,
  StaticJsRealmOptions,
} from "../factories/StaticJsRealm.js";

import type { StaticJsRealm } from "../StaticJsRealm.js";
import { evaluateCommands } from "../../../evaluator/evaluator-runtime.js";

export default class StaticJsRealmImpl implements StaticJsRealm {
  private readonly _globalObject: StaticJsObject;
  private readonly _globalEnv: StaticJsEnvironment;
  private readonly _typeFactory: StaticJsTypeFactory;

  private readonly _staticModules = new Map<
    string,
    StaticJsModuleImplementation | null
  >();
  private readonly _externalResolveModule:
    | StaticJsRealmOptions["resolveImportedModule"]
    | undefined;

  constructor({
    globalObject,
    globalThis,
    modules,
    resolveImportedModule: resolveModule,
  }: StaticJsRealmOptions = {}) {
    this._externalResolveModule = resolveModule;

    // Note: We could check to see if globalObject has factories or prototypes and use them
    // instead of these.
    const intrinsics = createIntrinsics(this);
    this._typeFactory = new StaticJsTypeFactoryImpl(this, intrinsics);

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

        globalObjectResolved.definePropertySync(name, descr);
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

    this._setupGlobalObject(
      globalObjectResolved,
      globalThisResolved,
      intrinsics,
    );

    this._globalObject = globalObjectResolved;

    this._globalEnv = new StaticJsGlobalEnvironmentRecord(
      this,
      globalThisResolved,
      globalObjectResolved,
    );

    for (const [name, moduleDef] of Object.entries(modules ?? {})) {
      const module = realmModuleToModule(this, name, moduleDef);
      this._staticModules.set(name, module);
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

  async resolveImportedModule(
    referencingModule: StaticJsModule,
    specifier: string,
  ): Promise<StaticJsModuleImplementation | null> {
    let module = this._staticModules.get(specifier);

    if (!module && this._externalResolveModule) {
      const resolved = await this._externalResolveModule(
        referencingModule,
        specifier,
      );
      module = realmModuleToModule(this, specifier, resolved);
    }

    return module ?? null;
  }

  invokeEvaluatorSync<TReturn>(
    evaluator: EvaluationGenerator<TReturn>,
  ): TReturn {
    const iterator = evaluateCommands(evaluator);

    let iteratorResult = iterator.next();
    while (!iteratorResult.done) {
      iteratorResult = iterator.next();
    }

    return iteratorResult.value;
  }

  private _setupGlobalObject(
    globalObject: StaticJsObject,
    globalThis: StaticJsValue,
    intrinsics: Instrinsics,
  ) {
    if (!globalObject.hasPropertySync("globalThis")) {
      globalObject.definePropertySync("globalThis", {
        value: globalThis,
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }

    if (!globalObject.hasPropertySync("global")) {
      globalObject.definePropertySync("global", {
        value: globalObject,
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }

    defineGlobalProperties(this, globalObject, intrinsics);
  }
}

function realmModuleToModule(
  realm: StaticJsRealm,
  specifier: string,
  module: StaticJsRealmModule,
): StaticJsModuleImplementation {
  if (typeof module === "string") {
    // Could try to import the compileModule function but I fear circular references.
    try {
      const parsed = parseAst(module, { sourceType: "module" });
      return new StaticJsModuleImpl(specifier, parsed.program, realm);
    } catch (e: unknown) {
      // FIXME: Only if actual syntax error
      // FIXME: Do we even get thrown syntax errors when evaluating dependent modules?
      throw new StaticJsRuntimeError(
        realm.types.error("SyntaxError", (e as Error).message),
      );
    }
  } else if (isStaticJsModuleImplementation(module)) {
    return module;
  } else if (isStaticJsModule(module)) {
    return staticJsModuleToImplementation(realm, module);
  } else if (module != null && "exports" in module) {
    return new StaticJsExternalModuleImpl(specifier, module.exports, realm);
  } else {
    throw new TypeError(
      `StaticJsRealm resolveModule for module ${specifier} did not return source code, a valid module, or an object with an exports property.`,
    );
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
