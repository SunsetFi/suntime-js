import type { StaticJsDebugStopEvent } from "@suntime-js/debugger";
import { StoppedEvent } from "@vscode/debugadapter";
import type { DebugProtocol } from "@vscode/debugprotocol";

export function toDapStoppedEvent(event: StaticJsDebugStopEvent, threadId: number): StoppedEvent {
  const stoppedEvent = new StoppedEvent(toDapStoppedReason(event), threadId);
  const body: DebugProtocol.StoppedEvent["body"] = {
    ...stoppedEvent.body,
    allThreadsStopped: true,
    reason: stoppedEvent.body.reason,
    threadId,
  };

  if (event.reason === "step") {
    body.description = "Paused after one StaticJs operation.";
    body.text = "operation step";
  }

  stoppedEvent.body = body;

  return stoppedEvent;
}

function toDapStoppedReason(
  event: StaticJsDebugStopEvent,
): "entry" | "breakpoint" | "step" | "pause" {
  switch (event.reason) {
    case "entry":
      return "entry";
    case "breakpoint":
      return "breakpoint";
    case "pause":
      return "pause";
    case "step":
      return "step";
    default:
      return "pause";
  }
}
