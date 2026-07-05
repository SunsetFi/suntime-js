import type { StaticJsModule } from "#modules/StaticJsModule.js";

import type { StaticJsModuleResolution } from "./StaticJsModuleResolution.js";

/**
 * A factory function to resolve an imported ECMAScript Module.
 */
export type StaticJsModuleResolver = (
  specifier: string,
  referencingModule: StaticJsModule,
) => Promise<StaticJsModuleResolution | null>;
