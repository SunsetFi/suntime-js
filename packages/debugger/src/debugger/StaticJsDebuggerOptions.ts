import type { StaticJsRealm, StaticJsTaskRunner } from "@suntime-js/core";

export interface StaticJsDebuggerOptions {
  readonly realm: StaticJsRealm;
  readonly runTask?: StaticJsTaskRunner | undefined;
}
