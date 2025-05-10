export interface StaticJsModule {
  readonly name: string;
  readonly moduleSpecifier: string;

  getExportedNames(): string[];

  getExport(exportName: string): unknown;

  getModuleNamespace(): Record<string, unknown>;
}

export function isStaticJsModule(x: unknown): x is StaticJsModule {
  const module = x as StaticJsModule;
  return (
    module &&
    typeof module === "object" &&
    typeof module.name === "string" &&
    typeof module.moduleSpecifier === "string" &&
    typeof module.getExportedNames === "function" &&
    typeof module.getExport === "function" &&
    typeof module.getModuleNamespace === "function"
  );
}
