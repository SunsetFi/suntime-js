import { StaticJsModule } from "./StaticJsModule.js";
import { StaticJsModuleImplementation } from "./StaticJsModuleImplementation.js";

export type StaticJsModuleResolutionFunction = (
  referencingModule: StaticJsModule,
  specifier: string,
) => Promise<StaticJsModuleImplementation | null>;
