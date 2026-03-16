import type { StaticJsDebugFrame } from "@suntime-js/debugger";
import { StackFrame } from "@vscode/debugadapter";

import { toDapSource } from "./toDapSource.js";

export function toDapStackFrame(frame: StaticJsDebugFrame, frameId: number): StackFrame {
  return new StackFrame(
    frameId,
    frame.name,
    toDapSource(frame.sourceName),
    frame.line,
    frame.column + 1,
  );
}
