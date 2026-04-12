import { StaticJsRunTaskOptions } from "../tasks/StaticJsRunTaskOptions.js";
import { StaticJsObject } from "../types/StaticJsObject.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

export interface StaticJsModule {
  readonly name: string;

  getExportedNames(opts?: StaticJsRunTaskOptions): string[];

  getExportAsync(exportName: string, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue | null>;
  getExportJsSync(exportName: string, opts?: StaticJsRunTaskOptions): unknown;

  getModuleNamespaceAsync(): Promise<StaticJsObject>;
  getModuleNamespaceJsSync(opts?: StaticJsRunTaskOptions): Record<string, unknown>;
}

export function isStaticJsModule(x: unknown): x is StaticJsModule {
  const module = x as StaticJsModule;
  return (
    module &&
    typeof module === "object" &&
    typeof module.name === "string" &&
    typeof module.getExportedNames === "function" &&
    typeof module.getExportJsSync === "function" &&
    typeof module.getModuleNamespaceJsSync === "function"
  );
}
