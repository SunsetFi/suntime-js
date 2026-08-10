import type { StaticJsLoadedModuleRequestRecord } from "#modules/implementation/StaticJsLoadedModuleRequestRecord.js";

/**
 * A target for modules to load into.
 */
export interface StaticJsModuleLoadTarget {
  /**
   * The modules that have been loaded into this target.
   */
  readonly loadedModules: readonly StaticJsLoadedModuleRequestRecord[];

  /**
   * Add a loaded module to this source record
   * @param module The module to add
   * @internal
   */
  _pushLoadedModule(module: StaticJsLoadedModuleRequestRecord): void;
}
