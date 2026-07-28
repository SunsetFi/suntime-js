import type { StaticJsModuleRequest } from "../StaticJsModuleRequest.js";
import type { StaticJsModuleRecord } from "./modules/StaticJsModuleRecord.js";

export interface StaticJsLoadedModuleRequestRecord extends StaticJsModuleRequest {
  readonly module: StaticJsModuleRecord;
}
