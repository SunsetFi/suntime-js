import type { StaticJsTaskSourceLocation } from "./StaticJsTaskSourceLocation.js";

export interface StaticJsTaskIteratorStackFrame {
  readonly sourceLocation: StaticJsTaskSourceLocation | null;
  readonly functionName: string | null;
}
