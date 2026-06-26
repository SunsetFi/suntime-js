import type { StaticJsValue } from "../types/StaticJsValue.js";

import type { StaticJsRunTaskOptions } from "./StaticJsRunTaskOptions.js";

/**
 * Information on a variable scope frame for a static JavaScript task.
 */
export interface StaticJsTaskScopeFrame {
  readonly name: string;
  readonly type: StaticJsTaskScopeFrameType;

  getVariables(opts?: StaticJsRunTaskOptions): readonly StaticJsTaskScopeVariable[];
}

export type StaticJsTaskScopeFrameType = "block" | "function" | "module" | "global";

export interface StaticJsTaskScopeVariable {
  readonly name: string;
  readonly value: StaticJsValue | null;
}
