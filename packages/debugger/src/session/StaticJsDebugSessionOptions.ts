import type { StaticJsDebugBreakpointInput } from "../breakpoints/StaticJsDebugBreakpoint.js";

export type StaticJsDebugSourceKind = "script" | "expression" | "module";

export interface StaticJsDebugLaunchOptions {
  sourceText?: string;
  sourceName?: string;
  sourceKind: StaticJsDebugSourceKind;
  stopOnEntry?: boolean;
  breakpoints?: StaticJsDebugBreakpointInput[];
}

export interface StaticJsDebugSessionOptions {
  launch: StaticJsDebugLaunchOptions;
}
