import { Breakpoint } from "@vscode/debugadapter";

export function toDapBreakpoint(line: number, verified: boolean): Breakpoint {
  return new Breakpoint(verified, line);
}
