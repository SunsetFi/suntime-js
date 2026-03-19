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

export function isStaticJsDebugSessionStateTerminal(
  state: StaticJsDebugSessionState,
): state is StaticJsDebugSessionStateTerminal {
  return state === "completed" || state === "terminated";
}
