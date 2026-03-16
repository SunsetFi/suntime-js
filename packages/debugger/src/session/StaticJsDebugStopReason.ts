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
