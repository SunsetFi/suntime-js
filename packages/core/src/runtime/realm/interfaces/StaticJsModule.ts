import { StaticJsValue } from "../../types/index.js";

export default interface StaticJsModule {
  dependencies: readonly string[];

  hasExport(name: string): boolean;
  getExport(name: string): StaticJsValue | undefined;
  getExportNames(): readonly string[];
}
