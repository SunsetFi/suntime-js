import type { StaticJsModule } from "./StaticJsModule.js";
import type { StaticJsModuleImplementation } from "./StaticJsModuleImplementation.js";

/**
 * A host-defined ECMAScript module
 */
export interface StaticJsRealmModuleExports {
  exports: Record<string, unknown>;
}

/**
 * Valid types for an ECMAScript Module resolution.
 */
export type StaticJsModuleResolution =
  | StaticJsRealmModuleExports
  | StaticJsModule
  | StaticJsModuleImplementation
  | string;
