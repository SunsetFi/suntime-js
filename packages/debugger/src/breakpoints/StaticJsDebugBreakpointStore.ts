import type {
  StaticJsDebugBreakpoint,
  StaticJsDebugBreakpointInput,
} from "./StaticJsDebugBreakpoint.js";

export interface StaticJsDebugBreakpointStore {
  readonly breakpoints: readonly StaticJsDebugBreakpoint[];

  setBreakpoints(sourceName: string, lines: readonly number[]): readonly StaticJsDebugBreakpoint[];
  addBreakpoint(breakpoint: StaticJsDebugBreakpointInput): StaticJsDebugBreakpoint;
  removeBreakpoint(breakpointId: string): boolean;
  clearBreakpoints(sourceName?: string): void;
}
