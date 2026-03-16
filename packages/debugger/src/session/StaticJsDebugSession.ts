import type {
  StaticJsDebugBreakpoint,
  StaticJsDebugBreakpointInput,
} from "../breakpoints/StaticJsDebugBreakpoint.js";
import type { StaticJsDebugChangeEvent } from "../events/StaticJsDebugChangeEvent.js";
import type { StaticJsDebugStartEvent } from "../events/StaticJsDebugStartEvent.js";
import type { StaticJsDebugStopEvent } from "../events/StaticJsDebugStopEvent.js";
import type { StaticJsDebugTerminateEvent } from "../events/StaticJsDebugTerminateEvent.js";
import type { StaticJsDebugFrame } from "../stack/StaticJsDebugFrame.js";
import type { StaticJsDebugSnapshot } from "../stack/StaticJsDebugSnapshot.js";
import type { StaticJsDebugSessionState } from "./StaticJsDebugSessionState.js";

export interface StaticJsDebugSession {
  readonly id: string;
  readonly state: StaticJsDebugSessionState;
  readonly breakpoints: readonly StaticJsDebugBreakpoint[];

  start(): Promise<StaticJsDebugStopEvent | null>;
  continue(): Promise<StaticJsDebugStopEvent | null>;
  next(): Promise<StaticJsDebugStopEvent | null>;
  pause(): void;
  terminate(): void;

  setBreakpoints(sourceName: string, lines: readonly number[]): void;
  addBreakpoint(breakpoint: StaticJsDebugBreakpointInput): StaticJsDebugBreakpoint;
  removeBreakpoint(breakpointId: string): boolean;
  clearBreakpoints(sourceName?: string): void;

  getSnapshot(): StaticJsDebugSnapshot | null;
  getStack(): readonly StaticJsDebugFrame[];
  waitForStop(): Promise<StaticJsDebugStopEvent>;

  onDidStart(listener: (event: StaticJsDebugStartEvent) => void): () => void;
  onDidStop(listener: (event: StaticJsDebugStopEvent) => void): () => void;
  onDidTerminate(listener: (event: StaticJsDebugTerminateEvent) => void): () => void;
  onDidChange(listener: (event: StaticJsDebugChangeEvent) => void): () => void;
}
