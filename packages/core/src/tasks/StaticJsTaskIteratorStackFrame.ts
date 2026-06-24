import type { StaticJsFunction } from "../runtime/types/StaticJsFunction.js";

import type { StaticJsTaskSourceLocation } from "./StaticJsTaskSourceLocation.js";

export interface StaticJsTaskIteratorStackFrame {
  readonly depth: number;
  readonly sourceLocation: StaticJsTaskSourceLocation | null;
  readonly function: StaticJsFunction | null;
}
