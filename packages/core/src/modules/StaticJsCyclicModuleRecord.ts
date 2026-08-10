import type { StaticJsModuleLoadTarget } from "./StaticJsModuleLoadTarget.js";
import type { StaticJsModuleRecord } from "./StaticJsModuleRecord.js";

export interface StaticJsCyclicModuleRecord
  extends StaticJsModuleRecord, StaticJsModuleLoadTarget {}
