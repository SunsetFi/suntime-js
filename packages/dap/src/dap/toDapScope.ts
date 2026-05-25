import type { StaticJsDebugScope } from "@suntime-js/debugger";
import type { DebugProtocol } from "@vscode/debugprotocol";

const presentationHints: Record<StaticJsDebugScope["type"], string> = {
  global: "globals",
  function: "locals",
  module: "locals",
  block: "locals",
};

export function toDapScope(scope: StaticJsDebugScope): DebugProtocol.Scope {
  return {
    name: scope.name,
    presentationHint: presentationHints[scope.type],
    variablesReference: scope.variablesReference,
    expensive: scope.expensive,
  };
}
