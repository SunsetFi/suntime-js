import type { Node } from "@babel/types";

import type { StaticJsModuleLoadTarget } from "#modules/implementation/StaticJsModuleLoadTarget.js";
import type { StaticJsSourceRecord } from "#sources/StaticJsSourceRecord.js";

export interface StaticJsScriptRecord extends StaticJsSourceRecord, StaticJsModuleLoadTarget {
  readonly sourceName: string;
  readonly ecmaScriptCode: Node;
}

export function isStaticJsScriptRecord(x: unknown): x is StaticJsScriptRecord {
  const record = x as StaticJsScriptRecord;
  return (
    record &&
    typeof record === "object" &&
    typeof record.sourceName === "string" &&
    typeof record.ecmaScriptSource === "string" &&
    record.ecmaScriptCode !== null &&
    typeof record.ecmaScriptCode === "object"
  );
}
