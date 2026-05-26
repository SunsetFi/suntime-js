import { StaticJsModule, StaticJsValue } from "@suntime-js/core";

export type StaticJsDebugTerminateEvent =
  | StaticJsDebugTerminateCompleteEvent
  | StaticJsDebugTerminateErrorEvent;

export interface StaticJsDebugTerminateCompleteEvent {
  readonly sessionId: string;
  readonly state: "completed";
  readonly reason: "complete";
  readonly result: StaticJsValue | StaticJsModule;
}

export interface StaticJsDebugTerminateErrorEvent {
  readonly sessionId: string;
  readonly state: "terminated";
  readonly reason: "error";
  readonly error: unknown;
}
