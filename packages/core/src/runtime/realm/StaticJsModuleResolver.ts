import type { StaticJsModule } from "../modules/StaticJsModule.js";
import type { StaticJsModuleImplementation } from "../modules/StaticJsModuleImplementation.js";

/**
 * A factory function to resolve an imported ECMAScript Module.
 */
export type StaticJsModuleResolver = (
  specifier: string,
  referencingModule: StaticJsModule,
) => Promise<StaticJsModuleResolution>;

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
