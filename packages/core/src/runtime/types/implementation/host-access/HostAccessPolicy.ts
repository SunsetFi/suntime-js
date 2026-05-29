import type { StaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsValue } from "../../StaticJsValue.js";

import type { ResolvedHostAccessOptions } from "./resolve-host-access-options.js";

/**
 * A bundle handed to external wrappers so they can re-wrap children/return
 * values under their policy without importing the type factory directly.
 */
export interface HostAccessPolicy {
  readonly options: ResolvedHostAccessOptions;

  /**
   * Wrap a host child according to this policy's `grantAccess` (or safe
   * defaults if none). Caller is responsible for short-circuiting primitives
   * if desired; this implementation must handle primitives correctly too.
   */
  wrapChild(childHostValue: unknown, member: boolean): StaticJsValue;

  /**
   * Wrap a host prototype reached via the structural [[Prototype]] chain,
   * using THIS policy verbatim (no grantAccess consultation).
   */
  wrapPrototype(hostProto: object): StaticJsObject;
}
