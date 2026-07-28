import type { StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";

import type { StaticJsModuleRecord } from "./modules/StaticJsModuleRecord.js";

export interface StaticJsGraphLoadingState {
  readonly promiseCapability: StaticJsPromiseCapabilityRecord;
  isLoading: boolean;
  pendingModulesCount: number;
  readonly visited: Set<StaticJsModuleRecord>;
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
