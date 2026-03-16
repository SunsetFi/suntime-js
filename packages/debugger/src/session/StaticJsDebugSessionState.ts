export type StaticJsDebugSessionState =
  | "idle"
  | "starting"
  | "running"
  | "paused"
  | "completed"
  | "terminated";

export type StaticJsDebugSessionStateTerminal = Extract<
  StaticJsDebugSessionState,
  "completed" | "terminated"
>;
