import type { StaticJsDebugFrame } from "@suntime-js/debugger";
import type { DebugProtocol } from "@vscode/debugprotocol";

import { toDapSource } from "./toDapSource.js";

export function toDapStackFrame(
  frame: StaticJsDebugFrame,
  frameId: number,
): DebugProtocol.StackFrame {
  return {
    id: frameId,
    name: frame.name,
    source: toDapSource(frame.sourceName),
    line: frame.line,
    column: frame.column + 1,
  };
}
