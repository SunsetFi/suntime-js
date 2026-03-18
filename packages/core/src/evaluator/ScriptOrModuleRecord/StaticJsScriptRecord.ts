import type { Node } from "@babel/types";

export interface StaticJsScriptRecord {
  type: "script";
  ecmaScriptCode: Node;
  ecmaScriptSource: string;
  // Spec has more things, like LoadedModules.
  // Can non-module scripts import modules?
}

export function StaticJsScriptRecord(
  ecmaScriptCode: Node,
  ecmaScriptSource: string,
): StaticJsScriptRecord {
  return {
    type: "script",
    ecmaScriptCode,
    ecmaScriptSource,
  };
}

export function isStaticJsScriptRecord(x: unknown): x is StaticJsScriptRecord {
  const record = x as StaticJsScriptRecord;
  return record && typeof record === "object" && record.type === "script";
}
