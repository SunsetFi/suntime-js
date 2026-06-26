import type { StaticJsModule } from "./StaticJsModule.js";
import type { StaticJsModuleImplementation } from "./StaticJsModuleImplementation.js";

export type StaticJsModuleResolutionFunction = (
  referencingModule: StaticJsModule,
  specifier: string,
) => Promise<StaticJsModuleImplementation | null>;
