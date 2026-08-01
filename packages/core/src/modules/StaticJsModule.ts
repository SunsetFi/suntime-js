import type { StaticJsAllocation } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsRunTaskOptions } from "#tasks/StaticJsRunTaskOptions.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

export interface StaticJsModule extends StaticJsAllocation {
  readonly realm: StaticJsRealm;
  readonly specifier: string;

  getExportedNames(): readonly string[];

  getExportAsync(exportName: string, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue | null>;
  getExportSync(exportName: string, opts?: StaticJsRunTaskOptions): StaticJsValue | null;

  getModuleNamespaceAsync(): Promise<StaticJsObject>;
  getModuleNamespaceSync(opts?: StaticJsRunTaskOptions): StaticJsObject;
}

export function isStaticJsModule(x: unknown): x is StaticJsModule {
  const module = x as StaticJsModule;
  return (
    module &&
    typeof module === "object" &&
    typeof module.realm === "object" &&
    typeof module.specifier === "string" &&
    typeof module.getExportedNames === "function" &&
    typeof module.getExportSync === "function" &&
    typeof module.getModuleNamespaceSync === "function"
  );
}
