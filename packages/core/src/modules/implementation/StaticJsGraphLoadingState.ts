import {
  promiseWithResolvers,
  type PromiseRejectFn,
  type PromiseResolveFn,
} from "#utils/promise-with-resolvers.js";

import type { StaticJsModuleImpl } from "./modules/StaticJsModuleImpl.js";

export interface StaticJsGraphLoadingState {
  // Note: The spec wants an engine promise capability here, but we want to capture
  // native errors thrown by the consumer's module resolution function.
  readonly promiseCapability: {
    readonly promise: Promise<void>;
    readonly resolve: PromiseResolveFn<void>;
    readonly reject: PromiseRejectFn;
  };
  isLoading: boolean;
  pendingModulesCount: number;
  readonly visited: Set<StaticJsModuleImpl>;
}

export function StaticJsGraphLoadingState(): StaticJsGraphLoadingState {
  return {
    promiseCapability: promiseWithResolvers<void>(),
    isLoading: true,
    pendingModulesCount: 1,
    visited: new Set<StaticJsModuleImpl>(),
  };
}

export function isStaticJsGraphLoadingState(x: unknown): x is StaticJsGraphLoadingState {
  return (
    typeof x === "object" &&
    x !== null &&
    "promiseCapability" in x &&
    "isLoading" in x &&
    "pendingModulesCount" in x &&
    "visited" in x
  );
}
