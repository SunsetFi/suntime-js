import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsScriptRecord } from "#scripts/StaticJsScriptRecord.js";

import type { StaticJsCyclicModuleRecord } from "./StaticJsCyclicModuleRecord.js";

export type StaticJsModuleReferrer =
  | StaticJsScriptRecord
  | StaticJsCyclicModuleRecord
  | StaticJsRealm;
