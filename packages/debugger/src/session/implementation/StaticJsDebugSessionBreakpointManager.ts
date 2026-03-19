import { StaticJsTaskSourceLocation } from "@suntime-js/core";
import {
  StaticJsDebugBreakpoint,
  StaticJsDebugBreakpointInput,
} from "../../breakpoints/StaticJsDebugBreakpoint.js";

export class StaticJsDebugSessionBreakpointManager {
  private readonly _breakpointsById = new Map<string, StaticJsDebugBreakpoint>();
  private readonly _breakpointIdsByKey = new Map<BreakpointKey, string>();
  private _nextBreakpointId = 1;

  constructor(private readonly _sessionId: string) {}

  get breakpoints(): readonly StaticJsDebugBreakpoint[] {
    return Array.from(this._breakpointsById.values());
  }

  addBreakpoint(breakpoint: StaticJsDebugBreakpointInput): StaticJsDebugBreakpoint {
    const bpk = breakpointKey(breakpoint);
    const existingId = this._breakpointIdsByKey.get(bpk)!;
    if (this._breakpointIdsByKey.has(bpk)) {
      return this._breakpointsById.get(existingId)!;
    }

    const nextBreakpoint: StaticJsDebugBreakpoint = {
      id: `breakpoint:${this._sessionId}:${this._nextBreakpointId++}`,
      sourceName: breakpoint.sourceName,
      line: breakpoint.line,
      verified: false,
    };
    this._breakpointsById.set(nextBreakpoint.id, nextBreakpoint);
    this._breakpointIdsByKey.set(bpk, nextBreakpoint.id);

    return nextBreakpoint;
  }

  removeBreakpoint(breakpointId: string): boolean {
    const breakpoint = this._breakpointsById.get(breakpointId);
    if (!breakpoint) {
      return false;
    }

    this._breakpointsById.delete(breakpointId);

    const bpk = breakpointKey(breakpoint);
    this._breakpointIdsByKey.delete(bpk);

    return true;
  }

  clearBreakpoints(sourceName?: string): void {
    if (sourceName) {
      for (const [id, breakpoint] of this._breakpointsById) {
        if (breakpoint.sourceName === sourceName) {
          this._breakpointsById.delete(id);
          const bpk = breakpointKey(breakpoint);
          this._breakpointIdsByKey.delete(bpk);
        }
      }
    } else {
      this._breakpointsById.clear();
      this._breakpointIdsByKey.clear();
    }
  }

  breakpointIdForLocation(location: StaticJsTaskSourceLocation): string | null {
    const bpk = breakpointKey(location);
    return this._breakpointIdsByKey.get(bpk) ?? null;
  }
}

type BreakpointKey = `${string}:${number}`;
function breakpointKey({ sourceName, line }: { sourceName: string; line: number }): BreakpointKey {
  return `${sourceName}:${line}`;
}
