import type { Node } from "@babel/types";

import type { StaticJsModuleImplementation } from "../../runtime/modules/StaticJsModuleImplementation.js";

export interface StaticJsModuleRecord {
  type: "module";
  ecmaScriptCode: Node;
  ecmaScriptSource: string;
  // Spec has more things, like Environment and Namespace.
  // Those are in here.
  module: StaticJsModuleImplementation;
}

export function StaticJsModuleRecord(
  ecmaScriptCode: Node,
  ecmaScriptSource: string,
  module: StaticJsModuleImplementation,
): StaticJsModuleRecord {
  return {
    type: "module",
    ecmaScriptCode,
    ecmaScriptSource,
    module,
  };
}

export function isStaticJsModuleRecord(x: unknown): x is StaticJsModuleRecord {
  const record = x as StaticJsModuleRecord;
  return record && typeof record === "object" && record.type === "module";
}
