import type { StaticJsModule } from "./modules/StaticJsModule.js";

export interface StaticJsResolveSetRecord {
  readonly module: StaticJsModule;
  readonly exportName: string;
}
