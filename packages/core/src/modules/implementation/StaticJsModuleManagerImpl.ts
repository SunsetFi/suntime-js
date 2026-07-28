import type { StaticJsScriptRecord } from "#evaluator/ScriptOrModuleRecord/StaticJsScriptRecord.js";
import type { StaticJsModuleManager } from "#modules/StaticJsModuleManager.js";
import type { StaticJsModuleResolution } from "#modules/StaticJsModuleResolution.js";
import type { StaticJsModuleResolver } from "#modules/StaticJsModuleResolver.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";

import { isStaticJsModule, type StaticJsModule } from "#modules/StaticJsModule.js";
import { isNotNull } from "#utils/is-not-null.js";

import type { StaticJsModuleRequest } from "../StaticJsModuleRequest.js";
import type { StaticJsCyclicModuleRecord } from "./modules/StaticJsCyclicModuleRecord.js";
import type { StaticJsModuleRecord } from "./modules/StaticJsModuleRecord.js";
import type { StaticJsGraphLoadingState } from "./StaticJsGraphLoadingState.js";
import type { StaticJsLoadedModuleRequestRecord } from "./StaticJsLoadedModuleRequestRecord.js";

import { StaticJsSourceTextModuleRecord } from "./modules/StaticJsSourceTextModuleRecord.js";

export interface StaticJsModuleManagerImplOptions {
  resolveExternalModule: StaticJsModuleResolver;
}

export class StaticJsModuleManagerImpl implements StaticJsModuleManager {
  private readonly _resolveExternalModule: StaticJsModuleResolver;

  private readonly _resolvedModules = new Map<string, StaticJsModuleRecord | null>();

  constructor(
    private readonly _realm: StaticJsRealm,
    options: StaticJsModuleManagerImplOptions,
  ) {
    this._resolveExternalModule = options.resolveExternalModule;
  }

  get loadedModules(): readonly StaticJsLoadedModuleRequestRecord[] {
    throw new Error("Not implemented");
  }

  keys(): Iterable<string> {
    return this._resolvedModules.keys();
  }

  values(): Iterable<StaticJsModule> {
    return this._resolvedModules
      .values()
      .filter(isNotNull)
      .map((record) => record.module);
  }

  entries(): Iterable<[string, StaticJsModule]> {
    return this._resolvedModules
      .entries()
      .filter(([_, value]) => value !== null)
      .map(([key, value]) => [key, value!.module]);
  }

  has(specifier: string): boolean {
    return this._resolvedModules.has(specifier);
  }

  loadImportedModule(
    referrer: StaticJsScriptRecord | StaticJsCyclicModuleRecord | StaticJsRealm,
    moduleRequest: StaticJsModuleRequest,
    payload: StaticJsGraphLoadingState | StaticJsPromiseCapabilityRecord,
  ) {
    // TODO: MUST cache for [referrer, moduleRequest] pairs
    // TODO: Call FinishLoadingImportedModule(referrer, moduleRequest, Completion.Normal(StaticJsModuleRecord))
  }
}
