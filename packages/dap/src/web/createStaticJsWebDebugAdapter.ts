import type { StaticJsTaskRunner, StaticJsRealm } from "@suntime-js/core";

import type { StaticJsWebDebugAdapter } from "./types/StaticJsWebDebugAdapter.js";
import { StaticJsWebDebugAdapterImpl } from "./StaticJsWebDebugAdapterImpl.js";

export const STATIC_JS_DEBUGGER_TYPE = "staticjs";

export interface StaticJsWebDebugAdapterOptions {
  readonly realm?: StaticJsRealm;
  readonly createRealm?: () => StaticJsRealm;
  readonly runTask?: StaticJsTaskRunner;
}

export function createStaticJsWebDebugAdapter(
  options: StaticJsWebDebugAdapterOptions = {},
): StaticJsWebDebugAdapter {
  return new StaticJsWebDebugAdapterImpl(options);
}
