import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsModuleManager } from "#modules/StaticJsModuleManager.js";
import type { StaticJsModuleReferrer } from "#modules/StaticJsModuleReferrer.js";
import type { StaticJsModuleResolution } from "#modules/StaticJsModuleResolution.js";
import type { StaticJsModuleResolver } from "#modules/StaticJsModuleResolver.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsTaskRunner } from "#tasks/StaticJsTaskRunner.js";
import type { StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";

import { performPromiseThen } from "#algorithms/perform-promise-then.js";
import { StaticJsRuntimeError } from "#errors/StaticJsRuntimeError.js";
import { captureThrownCompletion } from "#evaluator/completions/capture-thrown-completion.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { allocated } from "#memory/allocated.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";
import { finishLoadingImportedModule } from "#modules/implementation/algorithms/finish-loading-imported-module.js";
import { isStaticJsModule, type StaticJsModule } from "#modules/StaticJsModule.js";
import { isStaticJsScriptRecord } from "#scripts/StaticJsScriptRecord.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { isStaticJsValue } from "#types/StaticJsValue.js";
import { captureError } from "#utils/capture-error.js";
import { promiseWithResolvers } from "#utils/promise-with-resolvers.js";
import typedKeys from "#utils/typed-keys.js";

import type { StaticJsModuleRequest } from "../StaticJsModuleRequest.js";
import type { StaticJsModuleImpl } from "./modules/StaticJsModuleImpl.js";
import type { StaticJsGraphLoadingState } from "./StaticJsGraphLoadingState.js";
import type { StaticJsHostLoadImportedModuleHostDefined } from "./StaticJsHostLoadImportedModuleHostDefined.js";
import type { StaticJsImportAttribute } from "./StaticJsImportAttribute.js";
import type { StaticJsLoadedModuleRequestRecord } from "./StaticJsLoadedModuleRequestRecord.js";

import { StaticJsSourceTextModuleImpl } from "./modules/StaticJsSourceTextModuleImpl.js";
import { StaticJsSyntheticModuleImpl } from "./modules/StaticJsSyntheticModuleImpl.js";

export interface StaticJsModuleManagerImplOptions {
  resolveExternalModule: StaticJsModuleResolver;
}

export class StaticJsModuleManagerImpl implements StaticJsModuleManager {
  private readonly _resolveExternalModule: StaticJsModuleResolver;

  private readonly _pendingResolutions = new Map<string, Promise<StaticJsModuleImpl | null>>();
  private readonly _resolvedModules = new Map<string, StaticJsModuleImpl | null | Error>();

  static create(
    realm: StaticJsRealm,
    options: StaticJsModuleManagerImplOptions,
  ): StaticJsModuleManagerImpl {
    return allocated(new StaticJsModuleManagerImpl(realm, options));
  }

  protected constructor(
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
    return this._resolvedModules.values().filter((module) => isStaticJsModule(module));
  }

  entries(): Iterable<[string, StaticJsModule]> {
    return this._resolvedModules.entries().filter((entry) => isStaticJsModuleEntry(entry));
  }

  has(specifier: string): boolean {
    const module = this._resolvedModules.get(specifier);
    // Can't use 'has' as we cache not-founds.
    return module != null;
  }

  get(specifier: string): StaticJsModule | undefined {
    const path = resolvePath("/", specifier);
    if (!path) {
      throw new RangeError(`Invalid module specifier: ${specifier}`);
    }

    const module = this._resolvedModules.get(path);
    if (module instanceof Error) {
      throw module;
    }

    // We cache not-found as null
    // Maybe we should return null here, but Map uses undefined.
    return module ?? undefined;
  }

  register(specifier: string, resolution: StaticJsModuleResolution): void {
    const path = resolvePath("/", specifier);
    if (!path) {
      throw new RangeError(`Invalid module specifier: ${specifier}`);
    }
    if (this._resolvedModules.has(path) || this._pendingResolutions.has(path)) {
      throw new Error(`Module already registered: ${specifier}`);
    }

    const module = this._resolutionToModule(resolution, path);
    this._resolvedModules.set(path, module);
  }

  async import(
    specifier: string,
    attributes: readonly StaticJsImportAttribute[],
    runTask: StaticJsTaskRunner = this._realm.config.runTask,
  ): Promise<StaticJsModule> {
    const resolved = await this._resolve({ specifier, attributes }, this._realm);
    if (!resolved) {
      throw new Error(`Failed to load module '${specifier}': Module not found`);
    }

    // Typescript null check jank.
    const module = resolved;

    await module.loadRequestedModules();

    const realm = this._realm;
    const { types } = realm;

    const { promise: loadPromise, reject, resolve } = promiseWithResolvers<void>();
    function* importTask() {
      const completion = yield* captureThrownCompletion(module.linkEvaluator());
      if (Completion.Abrupt.is(completion)) {
        reject(new StaticJsRuntimeError(Completion.value(completion)));
        return;
      }

      // This can throw with asserts if something Goes Wrong,
      // but that should be caught and reported by our macrotask.
      // This can also async await and end up being fulfilled by
      // other macrotasks, but those should catch their asserts.
      // However, we would ideally fail our own promise if that happens,
      // but we currently do not.  It just orphans.
      const evaluatePromise = yield* module.evaluateEvaluator();

      const onFulfilled = StaticJsNativeFunctionImpl.create(realm, "", function* () {
        resolve();
        return types.undefined;
      });

      const onRejected = StaticJsNativeFunctionImpl.create(realm, "", function* (_thisArg, reason) {
        reject(new StaticJsRuntimeError(reason));
        return types.undefined;
      });

      yield* performPromiseThen(evaluatePromise, onFulfilled, onRejected);
    }

    try {
      const jobPromise = this._realm.enqueueGenericJob(importTask, runTask);
      await Promise.all([jobPromise, loadPromise]);
      return module;
    } catch (e) {
      // This should always be an Error instance.
      if (e instanceof Error) {
        const path = resolvePath("/", module.specifier)!;
        this._resolvedModules.set(path, e);
      }
      throw e;
    }
  }

  loadImportedModule(
    referrer: StaticJsModuleReferrer,
    moduleRequest: StaticJsModuleRequest,
    { runTask, onError }: StaticJsHostLoadImportedModuleHostDefined,
    payload: StaticJsGraphLoadingState | StaticJsPromiseCapabilityRecord,
  ) {
    const resolved = this._resolve(moduleRequest, referrer);

    resolved
      .then(
        (module) => {
          if (module) {
            finishLoadingImportedModule(referrer, moduleRequest, payload, module, runTask);
          } else {
            const err = this._realm.types.error(
              "SyntaxError",
              `Failed to load module '${moduleRequest.specifier}': Module not found`,
            );
            finishLoadingImportedModule(
              referrer,
              moduleRequest,
              payload,
              Completion.Throw(err),
              runTask,
            );
          }
        },
        (err) => {
          if (Completion.Throw.is(err)) {
            finishLoadingImportedModule(referrer, moduleRequest, payload, err, runTask);
          } else {
            // Deferr to the hostDefined catch.
            throw err;
          }
        },
      )
      .catch(onError);
  }

  private _resolve(
    moduleRequest: StaticJsModuleRequest,
    referrer: StaticJsModuleReferrer,
  ): Promise<StaticJsModuleImpl | null> {
    let rootPath: string = "";
    if (isStaticJsModule(referrer)) {
      rootPath = moduleDirname(referrer.specifier);
    } else if (isStaticJsScriptRecord(referrer)) {
      rootPath = moduleDirname(referrer.sourceName);
    }

    const path = resolvePath(rootPath, moduleRequest.specifier);

    if (!path) {
      return Promise.resolve(null);
    }

    const module = this._resolvedModules.get(path);
    if (module) {
      if (module instanceof Error) {
        throw module;
      }

      return Promise.resolve(module);
    }

    const pending = this._pendingResolutions.get(path);
    if (pending) {
      return pending;
    }

    const load = (async () => {
      const resolved = await captureError.async(
        this._resolveExternalModule(moduleRequest, referrer),
      );

      this._pendingResolutions.delete(path);

      if (resolved instanceof Error) {
        this._resolvedModules.set(path, resolved);
        return null;
      }

      if (resolved) {
        const module = captureError(() => this._resolutionToModule(resolved, path));
        this._resolvedModules.set(path, module);
        if (module instanceof Error) {
          throw module;
        }

        return module;
      }

      this._resolvedModules.set(path, null);
      return null;
    })();

    this._pendingResolutions.set(path, load);
    return load;
  }

  private _resolutionToModule(
    resolution: StaticJsModuleResolution,
    path: string,
  ): StaticJsModuleImpl | null {
    if (typeof resolution === "function") {
      resolution = resolution(this._realm);
    }

    if (typeof resolution === "string") {
      return StaticJsSourceTextModuleImpl.parse(resolution, path, this._realm);
    } else if (isStaticJsModule(resolution)) {
      // FIXME: Previously we had shims if this wasnt perfect.
      // This is a nasty result of trying to hide the implementation...
      return resolution as StaticJsModuleImpl;
    } else {
      for (const [key, value] of Object.entries(resolution)) {
        if (!isStaticJsValue(value)) {
          throw new Error(`Invalid module resolution value: key ${key} is not a StaticJsValue`);
        }
      }

      return StaticJsSyntheticModuleImpl.create({
        specifier: path,
        exportNames: Object.keys(resolution),
        evaluationSteps: function* (module) {
          for (const exportName of typedKeys(resolution)) {
            yield* module.setSyntheticModuleExportEvaluator(exportName, resolution[exportName]);
          }
        },
        realm: this._realm,
      });
    }
  }

  mark(set: Set<StaticJsAllocation>): void {
    if (set.has(this)) {
      return;
    }

    set.add(this);

    for (const module of this._resolvedModules.values()) {
      if (isStaticJsModule(module)) {
        module.mark(set);
      }
    }
  }

  allocateSelf(
    allocate: StaticJsAllocator = this._realm.memory.allocate.bind(this._realm.memory),
  ): void {
    for (const [key, module] of this._resolvedModules.entries()) {
      allocate(StaticJsMemoryAllocationTag.StaticJsMapEntryOverhead, undefined);

      allocate(StaticJsMemoryAllocationTag.RawString, key);

      if (module instanceof Error) {
        // FIXME: The error itself costs something.
        // Also check cause.
        // Could OOM by repeatedly doing bad import() with long string data.
        allocate(StaticJsMemoryAllocationTag.RawString, module.name);
        allocate(StaticJsMemoryAllocationTag.RawString, module.message);
      }
    }
  }
}

function isStaticJsModuleEntry(
  value: [string, StaticJsModuleImpl | null | Error],
): value is [string, StaticJsModuleImpl] {
  return isStaticJsModule(value[1]);
}

function moduleDirname(specifier: string): string {
  const parts = specifier.split("/");
  if (parts.length <= 1) {
    return "";
  }
  return parts.slice(0, -1).join("/");
}

function resolvePath(dir: string, specifier: string): string | null {
  if (specifier.startsWith("/") || !specifier.startsWith(".")) {
    // Specifier is absolute, or ambiguous.
    return specifier;
  }

  // Specifier is a directory path.

  const dirParts = dir.split("/").filter((part) => part.length > 0);
  const pathParts = specifier.split("/").filter((part) => part.length > 0);

  const final: string[] = [];
  for (const part of [...dirParts, ...pathParts]) {
    if (part === ".") {
      continue;
    }

    if (part === "..") {
      if (final.length > 0) {
        final.pop();
      } else {
        return null;
      }
      continue;
    }

    final.push(part);
  }

  let finalPath = final.join("/");

  // If the dir is rooted, preserve the root.
  if (!finalPath.startsWith("/")) {
    finalPath = `/${finalPath}`;
  }

  return finalPath;
}
