import type { StaticJsModule } from "./StaticJsModule.js";
import type { StaticJsModuleImplementation } from "./StaticJsModuleImplementation.js";
import type { StaticJsModuleResolution } from "./StaticJsModuleResolution.js";

export interface StaticJsModuleManager {
  keys(): Iterable<string>;
  values(): Iterable<StaticJsModuleImplementation>;
  entries(): Iterable<[string, StaticJsModuleImplementation]>;
  has(specifier: string): boolean;

  add(specifier: string, moduleResolution: StaticJsModuleResolution): void;

  resolve(
    specifier: string,
    referencingModule: StaticJsModule,
  ): Promise<StaticJsModuleImplementation | null>;
}
