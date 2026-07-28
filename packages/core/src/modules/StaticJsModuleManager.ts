import type { StaticJsModule } from "./StaticJsModule.js";

export interface StaticJsModuleManager {
  keys(): Iterable<string>;
  values(): Iterable<StaticJsModule>;
  entries(): Iterable<[string, StaticJsModule]>;
  has(specifier: string): boolean;

  resolve(specifier: string, referencingModule: StaticJsModule): Promise<StaticJsModule | null>;
}
