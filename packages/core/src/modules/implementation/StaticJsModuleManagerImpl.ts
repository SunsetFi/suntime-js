import type { StaticJsModuleManager } from "#modules/StaticJsModuleManager.js";
import type { StaticJsModuleReferrer } from "#modules/StaticJsModuleReferrer.js";
import type { StaticJsModuleResolution } from "#modules/StaticJsModuleResolution.js";
import type { StaticJsModuleResolver } from "#modules/StaticJsModuleResolver.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";

import { Completion } from "#evaluator/completions/Completion.js";
import { X } from "#evaluator/completions/X.js";
import { finishLoadingImportedModule } from "#modules/implementation/algorithms/finish-loading-imported-module.js";
import { isStaticJsModule, type StaticJsModule } from "#modules/StaticJsModule.js";
import { isStaticJsScriptRecord } from "#scripts/StaticJsScriptRecord.js";
import { isEntryValueNotNull } from "#utils/is-entry-value-not-null.js";
import { isNotNull } from "#utils/is-not-null.js";
import typedKeys from "#utils/typed-keys.js";

import type { StaticJsModuleRequest } from "../StaticJsModuleRequest.js";
import type { StaticJsModuleImpl } from "./modules/StaticJsModuleImpl.js";
import type { StaticJsGraphLoadingState } from "./StaticJsGraphLoadingState.js";
import type { StaticJsHostLoadModuleState } from "./StaticJsHostLoadModuleState.js";
import type { StaticJsLoadedModuleRequestRecord } from "./StaticJsLoadedModuleRequestRecord.js";

import { StaticJsSourceTextModuleImpl } from "./modules/StaticJsSourceTextModuleImpl.js";
import { StaticJsSyntheticModuleImpl } from "./modules/StaticJsSyntheticModuleImpl.js";

export interface StaticJsModuleManagerImplOptions {
  resolveExternalModule: StaticJsModuleResolver;
}

export class StaticJsModuleManagerImpl implements StaticJsModuleManager {
  private readonly _resolveExternalModule: StaticJsModuleResolver;

  private readonly _pendingResolutions = new Map<string, Promise<StaticJsModuleImpl | null>>();
  private readonly _resolvedModules = new Map<string, StaticJsModuleImpl | null>();

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
    return this._resolvedModules.values().filter(isNotNull);
  }

  entries(): Iterable<[string, StaticJsModule]> {
    return this._resolvedModules.entries().filter(isEntryValueNotNull);
  }

  has(specifier: string): boolean {
    const module = this._resolvedModules.get(specifier);
    // Can't use 'has' as we cache not-founds.
    return module != null;
  }

  get(specifier: string): StaticJsModule | undefined {
    const path = this._resolvePath(specifier);
    const module = this._resolvedModules.get(path);
    // We may cache not-found as null
    return module ?? undefined;
  }

  add(specifier: string, resolution: StaticJsModuleResolution): void {
    const path = this._resolvePath(specifier);
    const module = this._resolutionToModule(resolution, path);
    this._resolvedModules.set(path, module);
  }

  loadImportedModule(
    referrer: StaticJsModuleReferrer,
    moduleRequest: StaticJsModuleRequest,
    hostDefined: StaticJsHostLoadModuleState | undefined,
    payload: StaticJsGraphLoadingState | StaticJsPromiseCapabilityRecord,
  ) {
    let rootPath: string = "/";
    if (isStaticJsModule(referrer)) {
      rootPath = this._moduleDirname(referrer.specifier);
    } else if (isStaticJsScriptRecord(referrer)) {
      rootPath = this._moduleDirname(referrer.sourceName);
    }

    const path = this._resolvePath(rootPath, moduleRequest.specifier);

    let load: Promise<StaticJsModuleImpl | null> | null = null;
    const current = this._resolvedModules.get(path);
    if (current) {
      load = Promise.resolve(current);
    }

    if (!load) {
      const pending = this._pendingResolutions.get(path);
      if (pending) {
        load = pending;
      }
    }

    if (!load) {
      const module = this._resolvedModules.get(path);
      if (module) {
        load = Promise.resolve(module);
      }
    }

    if (!load) {
      load = (async () => {
        const resolved = await this._resolveExternalModule(moduleRequest, referrer);
        if (resolved) {
          const module = this._resolutionToModule(resolved, path);
          this._resolvedModules.set(path, module);
          return module;
        } else {
          this._resolvedModules.set(path, null);
          return null;
        }
      })();

      this._pendingResolutions.set(path, load);
    }

    load
      .then(
        (module) => {
          return this._realm.enqueueGenericJob(function* () {
            if (module) {
              yield* finishLoadingImportedModule(referrer, moduleRequest, payload, module);
            } else {
              const err = yield* Completion.Throw.create(
                "Error",
                `Failed to load module ${moduleRequest.specifier}`,
              );
              yield* finishLoadingImportedModule(referrer, moduleRequest, payload, err);
            }
          });
        },
        (err) => {
          return this._realm.enqueueGenericJob(function* () {
            if (!Completion.Throw.is(err)) {
              err = yield* Completion.Throw.create(
                "Error",
                `Failed to load module ${moduleRequest.specifier}`,
              );
            }
            yield* finishLoadingImportedModule(referrer, moduleRequest, payload, err);
          });
        },
      )
      .catch((err) => {
        // Normal errors go through the promiseCapability, but engine errors
        // like asserts end up here.
        // FIXME: This does not tunnel deeper in!  At least, not for import().
        hostDefined?.reject(err);
      });
  }

  private _resolutionToModule(
    resolution: StaticJsModuleResolution,
    path: string,
  ): StaticJsModuleImpl | null {
    if (typeof resolution === "string") {
      return StaticJsSourceTextModuleImpl.parse(resolution, path, this._realm);
    } else if (isStaticJsModule(resolution)) {
      // FIXME: Previously we had shims if this wasnt perfect.
      // This is a nasty result of trying to hide the implementation...
      return resolution as StaticJsModuleImpl;
    } else {
      return StaticJsSyntheticModuleImpl.create({
        specifier: path,
        exportNames: Object.keys(resolution),
        evaluationSteps: function* () {
          for (const exportName of typedKeys(resolution)) {
            yield* X(this.environment!.createMutableBindingEvaluator(exportName, false));
            yield* X(
              this.environment!.initializeBindingEvaluator(exportName, resolution[exportName]),
            );
          }
        },
        realm: this._realm,
      });
    }
  }

  private _moduleDirname(specifier: string): string {
    const parts = specifier.split("/");
    if (parts.length <= 1) {
      return "/";
    }
    return parts.slice(0, -1).join("/");
  }

  private _resolvePath(...parts: string[]): string {
    // TODO: Handle ../
    const sanitized = parts.map((part) => {
      if (part.startsWith("/")) {
        return part.slice(1);
      }
      return part;
    });

    let path = sanitized.join("/");
    if (!path.startsWith("/")) {
      path = "/" + path;
    }

    return path;
  }
}
