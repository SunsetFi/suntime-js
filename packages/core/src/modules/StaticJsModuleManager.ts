import type { StaticJsAllocation } from "#memory/StaticJsAllocation.js";

import type { StaticJsModule } from "./StaticJsModule.js";

export interface StaticJsModuleManager extends StaticJsAllocation {
  keys(): Iterable<string>;
  values(): Iterable<StaticJsModule>;
  entries(): Iterable<[string, StaticJsModule]>;
  has(specifier: string): boolean;
  get(specifier: string): StaticJsModule | undefined;
}
