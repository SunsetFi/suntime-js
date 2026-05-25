import type { StaticJsDebugVariable } from "@suntime-js/debugger";
import type { DebugProtocol } from "@vscode/debugprotocol";

export function toDapVariable(variable: StaticJsDebugVariable): DebugProtocol.Variable {
  return {
    name: variable.name,
    value: variable.value,
    type: variable.type,
    variablesReference: variable.variablesReference,
  };
}
