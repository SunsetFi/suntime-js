import type { StaticJsFunction } from "../types/StaticJsFunction.js";

import type { StaticJsTaskSourceLocation } from "./StaticJsTaskSourceLocation.js";

export interface StaticJsTaskIteratorStackFrame {
  readonly depth: number;
  readonly sourceLocation: StaticJsTaskSourceLocation | null;
  readonly function: StaticJsFunction | null;
  readonly functionName: string | null;
}
