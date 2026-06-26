import type { StaticJsMarkable } from "#memory/StaticJsMarkable.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import type { StaticJsToNativeOpts } from "./StaticJsToNativeOpts.js";

import { StaticJsTypeCode } from "./StaticJsTypeCode.js";

export interface StaticJsPrimitive extends StaticJsMarkable {
  /**
   * The realm that created this value. Each value is unique to the realm that created it, and cannot be crossed to other realms.
   */
  readonly realm: StaticJsRealm;

  /**
   * The javascript-given 'typeof' operator result for this value.
   */
  readonly typeOf: string;

  /**
   * The engine-given type of this value, reflecting its StaticJsValue type.
   */
  readonly runtimeTypeOf: string;

  /**
   * The engine-given type code for this value, reflecting its StaticJsValue type.
   */
  readonly runtimeTypeCode: StaticJsTypeCode;

  /**
   * Create a native JavaScript representation of this value.
   * @param opts Options for how to convert this value to a native JavaScript representation.
   */
  toNative(opts?: StaticJsToNativeOpts): unknown;

  /**
   * Creates a string representation of this value.
   * **Warning**: This is a synchronous method and may invoke sandboxed code, which can lead to deadlocks or other issues. Use with caution.
   */
  toStringSync(): string;
}
