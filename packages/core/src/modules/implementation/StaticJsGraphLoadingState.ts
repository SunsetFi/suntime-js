import type { StaticJsPromiseCapabilityRecord } from "#types/StaticJsPromise.js";

import type { StaticJsModuleImpl } from "./modules/StaticJsModuleImpl.js";
import type { StaticJsHostLoadModuleState } from "./StaticJsHostLoadModuleState.js";

export interface StaticJsGraphLoadingState {
  readonly promiseCapability: StaticJsPromiseCapabilityRecord;
  isLoading: boolean;
  pendingModulesCount: number;
  readonly visited: Set<StaticJsModuleImpl>;
  readonly hostDefined?: StaticJsHostLoadModuleState;
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
