import type { StaticJsModuleManager } from "#modules/StaticJsModuleManager.js";
import type { StaticJsModuleResolution } from "#modules/StaticJsModuleResolution.js";
import type { StaticJsModuleResolver } from "#modules/StaticJsModuleResolver.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { isStaticJsModule, type StaticJsModule } from "#modules/StaticJsModule.js";
import {
  isStaticJsModuleImplementation,
  staticJsModuleToImplementation,
  type StaticJsModuleImplementation,
} from "#modules/StaticJsModuleImplementation.js";
import { parseModule } from "#parser/parse-module.js";
import { isNotNull } from "#utils/is-not-null.js";

import { StaticJsAstModuleImpl } from "./StaticJsAstModuleImpl.js";
import { StaticJsExternalModuleImpl } from "./StaticJsExternalModuleImpl.js";

export interface StaticJsModuleManagerImplOptions {
  resolveExternalModule: StaticJsModuleResolver;
}

export class StaticJsModuleManagerImpl implements StaticJsModuleManager {
  private readonly _resolveExternalModule: StaticJsModuleResolver;

  private readonly _resolvedModules = new Map<string, StaticJsModuleImplementation | null>();

  constructor(
    private readonly _realm: StaticJsRealm,
    options: StaticJsModuleManagerImplOptions,
  ) {
    this._resolveExternalModule = options.resolveExternalModule;
  }

  keys(): Iterable<string> {
    return this._resolvedModules.keys();
  }

  values(): Iterable<StaticJsModuleImplementation> {
    return this._resolvedModules.values().filter(isNotNull);
  }

  entries(): Iterable<[string, StaticJsModuleImplementation]> {
    return this._resolvedModules.entries().filter(([_, value]) => value !== null) as Iterable<
      [string, StaticJsModuleImplementation]
    >;
  }

  has(specifier: string): boolean {
    return this._resolvedModules.has(specifier);
  }

  add(specifier: string, moduleResolution: StaticJsModuleResolution): void {
    if (this._resolvedModules.has(specifier)) {
      throw new Error(`Module ${specifier} has already been resolved.`);
    }

    const implementation = moduleResolutionToImplementation(
      this._realm,
      specifier,
      moduleResolution,
    );
    this._resolvedModules.set(specifier, implementation);
  }

  async resolve(
    specifier: string,
    referencingModule: StaticJsModule,
  ): Promise<StaticJsModuleImplementation | null> {
    if (this._resolvedModules.has(specifier)) {
      return this._resolvedModules.get(specifier) ?? null;
    }

    let resolved = await this._resolveExternalModule(specifier, referencingModule);
    if (resolved) {
      const implementation = moduleResolutionToImplementation(this._realm, specifier, resolved);
      this._resolvedModules.set(specifier, implementation);
      return implementation;
    }

    return null;
  }
}

function moduleResolutionToImplementation(
  realm: StaticJsRealm,
  specifier: string,
  module: StaticJsModuleResolution,
): StaticJsModuleImplementation {
  if (typeof module === "string") {
    const parsed = parseModule(module, specifier);
    return StaticJsAstModuleImpl.create({
      name: specifier,
      ecmaScriptSource: module,
      ecmaScriptCode: parsed.program,
      realm,
    });
  } else if (isStaticJsModuleImplementation(module)) {
    return module;
  } else if (isStaticJsModule(module)) {
    return staticJsModuleToImplementation(realm, module);
  } else if (module != null && "exports" in module) {
    return StaticJsExternalModuleImpl.create({ name: specifier, obj: module.exports, realm });
  } else {
    throw new TypeError(
      `StaticJsRealm resolveModule for module ${specifier} did not return source code, a valid module, or an object with an exports property.`,
    );
  }
}
