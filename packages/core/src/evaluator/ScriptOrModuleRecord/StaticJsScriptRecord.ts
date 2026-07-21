import type { Node } from "@babel/types";

import type { StaticJsLoadedModuleRequest } from "#modules/implementation-v2/StaticJsLoadedModuleRequest.js";

export interface StaticJsScriptRecord {
  type: "script";
  ecmaScriptCode: Node;
  ecmaScriptSource: string;
  loadedModules: StaticJsLoadedModuleRequest[];
}

export function StaticJsScriptRecord(
  ecmaScriptCode: Node,
  ecmaScriptSource: string,
): StaticJsScriptRecord {
  return {
    type: "script",
    ecmaScriptCode,
    ecmaScriptSource,
    loadedModules: [],
  };
}

export function isStaticJsScriptRecord(x: unknown): x is StaticJsScriptRecord {
  const record = x as StaticJsScriptRecord;
  return record && typeof record === "object" && record.type === "script";
}
