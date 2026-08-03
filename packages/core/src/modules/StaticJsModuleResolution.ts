import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import type { StaticJsModule } from "./StaticJsModule.js";

export type StaticJsModuleResolutionTerminals =
  | string
  | Record<string, StaticJsValue>
  | StaticJsModule;
export type StaticJsModuleResolution =
  | StaticJsModuleResolutionTerminals
  | ((realm: StaticJsRealm) => StaticJsModuleResolutionTerminals);
