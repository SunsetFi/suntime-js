import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

export interface StaticJsSourceRecord {
  readonly realm: StaticJsRealm;
  readonly ecmaScriptSource: string;
}
