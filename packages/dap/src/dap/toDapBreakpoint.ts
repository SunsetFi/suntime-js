import type { DebugProtocol } from "@vscode/debugprotocol";

export function toDapBreakpoint(line: number, verified: boolean): DebugProtocol.Breakpoint {
  return {
    verified,
    line,
  };
}
