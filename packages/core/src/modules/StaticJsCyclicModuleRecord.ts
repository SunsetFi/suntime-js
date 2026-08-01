import type { StaticJsModuleLoadTarget } from "./implementation/StaticJsModuleLoadTarget.js";
import type { StaticJsModuleRecord } from "./StaticJsModuleRecord.js";

export interface StaticJsCyclicModuleRecord
  extends StaticJsModuleRecord, StaticJsModuleLoadTarget {}
