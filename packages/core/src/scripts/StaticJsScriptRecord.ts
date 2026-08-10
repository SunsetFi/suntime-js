import type { Node } from "@babel/types";

import type { StaticJsModuleLoadTarget } from "#modules/StaticJsModuleLoadTarget.js";
import type { StaticJsSourceRecord } from "#sources/StaticJsSourceRecord.js";

export interface StaticJsScriptRecord extends StaticJsSourceRecord, StaticJsModuleLoadTarget {
  /**
   * The name of the source file given on execution, or a generated one if none was given.
   */
  readonly sourceName: string;

  /**
   * The parsed AST of the script's source code.
   * @internal
   */
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
