import type { StaticJsDebugBreakpointInput } from "../breakpoints/StaticJsDebugBreakpoint.js";

export type StaticJsDebugSourceKind = "script" | "expression" | "module";

export interface StaticJsDebugLaunchOptions {
  readonly sourceText?: string;
  readonly sourceName?: string;
  readonly sourceKind: StaticJsDebugSourceKind;
  readonly stopOnEntry?: boolean;
  readonly breakpoints?: readonly StaticJsDebugBreakpointInput[];
}

export interface StaticJsDebugSessionOptions {
  readonly launch: StaticJsDebugLaunchOptions;
}
