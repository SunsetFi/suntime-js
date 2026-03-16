export interface StaticJsDebugBreakpointInput {
  readonly sourceName: string;
  readonly line: number;
}

export interface StaticJsDebugBreakpoint extends StaticJsDebugBreakpointInput {
  readonly id: string;
  readonly verified: boolean;
}
