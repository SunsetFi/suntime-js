export interface StaticJsModule {
  readonly name: string;

  getExportedNames(): string[];

  getExport(exportName: string): Promise<unknown>;

  getModuleNamespace(): Promise<Record<string, unknown>>;
}

export function isStaticJsModule(x: unknown): x is StaticJsModule {
  const module = x as StaticJsModule;
  return (
    module &&
    typeof module === "object" &&
    typeof module.name === "string" &&
    typeof module.getExportedNames === "function" &&
    typeof module.getExport === "function" &&
    typeof module.getModuleNamespace === "function"
  );
}
