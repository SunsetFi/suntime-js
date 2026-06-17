export type StaticJsDebugStopReason =
  | "entry"
  | "breakpoint"
  | "step"
  | "pause"
  | "complete"
  | "terminate"
  | "error";

export type StaticJsDebugStopReasonTerminal = Extract<
  StaticJsDebugStopReason,
  "complete" | "terminate" | "error"
>;

export function isStaticJsDebugStopReasonTerminal(
  reason: StaticJsDebugStopReason,
): reason is StaticJsDebugStopReasonTerminal {
  return reason === "complete" || reason === "terminate" || reason === "error";
}
