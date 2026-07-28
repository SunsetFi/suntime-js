import type { StaticJsValue } from "#types/StaticJsValue.js";

import type { StaticJsModule } from "./StaticJsModule.js";

export type StaticJsModuleResolution = string | Record<string, StaticJsValue> | StaticJsModule;
