import type { HostAccessArg } from "./HostAccessOptions.js";

/**
 * Options for converting a {@link StaticJsValue} to its native (host)
 * representation via `toNative`.
 */
export interface StaticJsToNativeOpts {
  /**
   * Host access to apply to values that cross the boundary as a result of the
   * conversion: arguments handed back to a bridged callback, and property
   * values read off a bridged object. This is passed verbatim as the `opts`
   * argument of `StaticJsTypeFactory.toStaticJsValue` for each such value, so a
   * sandbox value handed into host code can keep an inherited access level
   * (e.g. a parent function's `childPolicy`) on its boundaries instead of
   * collapsing to the realm defaults. When omitted, values use the realm's
   * default `toStaticJsValue` behavior.
   */
  access?: HostAccessArg | undefined;
}
