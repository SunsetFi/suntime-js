import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsScriptRecord } from "#scripts/StaticJsScriptRecord.js";

import type { StaticJsCyclicModuleImpl } from "./implementation/modules/StaticJsCyclicModuleImpl.js";

export type StaticJsModuleReferrer =
  | StaticJsScriptRecord
  | StaticJsCyclicModuleImpl
  | StaticJsRealm;
