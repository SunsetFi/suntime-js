import type { StaticJsModuleReferrer } from "./StaticJsModuleReferrer.js";
import type { StaticJsModuleRequest } from "./StaticJsModuleRequest.js";
import type { StaticJsModuleResolution } from "./StaticJsModuleResolution.js";

/**
 * A factory function to resolve an imported ECMAScript Module.
 */
export type StaticJsModuleResolver = (
  request: StaticJsModuleRequest,
  referrer: StaticJsModuleReferrer,
) => Promise<StaticJsModuleResolution | null>;
