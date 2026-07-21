import type { StaticJsModule } from "./modules/StaticJsModule.js";
import type { StaticJsModuleRequest } from "./StaticJsModuleRequest.js";

export interface StaticJsLoadedModuleRequest extends StaticJsModuleRequest {
  readonly module: StaticJsModule;
}
