import type { PromiseResolveFn, PromiseRejectFn } from "../../utils/promise-with-resolvers.js";

/**
 * Stateful data for loading imported modules.
 * Equivalent to HostLoadImportedModule hostDefined parameter.
 */
export interface StaticJsHostLoadModuleState {
  /**
   * Callback for when the HostLoadModule invocation succeeds.
   */
  resolve: PromiseResolveFn<void>;

  /**
   * Callback for when the HostLoadModule invocation fails.
   * @param reason The rejection reason.
   */
  reject: PromiseRejectFn;
}
