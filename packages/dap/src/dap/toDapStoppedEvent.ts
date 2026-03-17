import type { StaticJsDebugStopEvent } from "@suntime-js/debugger";
import type { DebugProtocol } from "@vscode/debugprotocol";

export function toDapStoppedEvent(
  event: StaticJsDebugStopEvent,
  threadId: number,
): DebugProtocol.StoppedEvent {
  const body: DebugProtocol.StoppedEvent["body"] = {
    allThreadsStopped: true,
    reason: toDapStoppedReason(event),
    threadId,
  };

  if (event.reason === "step") {
    body.description = "Paused after one StaticJs operation.";
    body.text = "operation step";
  }

  return {
    seq: 0,
    type: "event",
    event: "stopped",
    body,
  };
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
