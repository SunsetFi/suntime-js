export interface StaticJsModule {
  readonly name: string;

  getExportedNames(): string[];

  // FIXME: Return a StaticJsValue
  getExport(exportName: string): unknown;

  // FIXME: Return a native object mapping StaticJsValue objects.
  getModuleNamespace(): Record<string, unknown>;
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
