import type { StaticJsModuleRequest } from "../StaticJsModuleRequest.js";
import type { StaticJsModuleImpl } from "./modules/StaticJsModuleImpl.js";

export interface StaticJsLoadedModuleRequestRecord extends StaticJsModuleRequest {
  readonly module: StaticJsModuleImpl;
}
