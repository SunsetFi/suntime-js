import type { StaticJsScriptOrModuleRecord } from "#StaticJsScriptOrModuleRecord.js";

import { StaticJsSourceTextModuleImpl } from "#modules/implementation/modules/StaticJsSourceTextModuleImpl.js";
import { isStaticJsScriptRecord } from "#scripts/StaticJsScriptRecord.js";

export function getScriptOrModuleSource(
  scriptOrModule: StaticJsScriptOrModuleRecord | null,
): string | null {
  if (isStaticJsScriptRecord(scriptOrModule)) {
    return scriptOrModule.ecmaScriptSource;
  }
  if (scriptOrModule instanceof StaticJsSourceTextModuleImpl) {
    return scriptOrModule.ecmaScriptSource;
  }
  return null;
}
