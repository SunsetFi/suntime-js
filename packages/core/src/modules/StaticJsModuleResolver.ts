import type { StaticJsModuleReferrer } from "./StaticJsModuleReferrer.js";
import type { StaticJsModuleResolution } from "./StaticJsModuleResolution.js";

/**
 * A factory function to resolve an imported ECMAScript Module.
 */
export type StaticJsModuleResolver = (
  specifier: string,
  referrer: StaticJsModuleReferrer,
) => Promise<StaticJsModuleResolution | null>;
