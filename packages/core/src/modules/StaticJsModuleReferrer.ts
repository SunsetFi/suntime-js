import type { StaticJsScriptRecord } from "#evaluator/ScriptOrModuleRecord/StaticJsScriptRecord.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import type { StaticJsModule } from "./StaticJsModule.js";

export type StaticJsModuleReferrer = StaticJsScriptRecord | StaticJsModule | StaticJsRealm;
