import { StaticJsObject as IStaticJsObject } from "../interfaces/index.js";
export interface StaticJsObjectConfig {
  static?: boolean;
  writable?: boolean;
  mutatable?: boolean;
}
export default function StaticJsObject(
  obj?: Record<string, any> | null,
  { static: isStatic, writable, mutatable }?: StaticJsObjectConfig,
): IStaticJsObject;
