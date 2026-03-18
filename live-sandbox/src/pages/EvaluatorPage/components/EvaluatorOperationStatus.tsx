import React from "react";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

export type EvaluatorDebuggerStatus =
  | "unstarted"
  | "starting"
  | "running"
  | "paused"
  | "done"
  | "error";

export interface EvaluatorDebuggerState {
  readonly status: EvaluatorDebuggerStatus;
  readonly log: readonly string[];
  readonly line: number | null;
  readonly column: number | null;
  readonly operationType: string | null;
  readonly detail: string | null;
}

type EvaluatorOperationStatusProps = {
  state: EvaluatorDebuggerState;
};

const EvaluatorOperationStatus = ({ state }: EvaluatorOperationStatusProps) => {
  const { status, log, line, column, operationType, detail } = state;

  return (
    <>
      <Typography>
        {status === "starting" && (
          <>
            <CircularProgress size="1rem" sx={{ mr: 1 }} />
            Starting debug session
          </>
        )}
        {status === "running" && (
          <>
            <CircularProgress size="1rem" sx={{ mr: 1 }} />
            Running
          </>
        )}
        {status === "paused" &&
          `Paused at ${operationType ?? "unknown"} ${line ?? "?"}:${column ?? "?"}`}
        {status === "done" && (detail ?? "Debug session ended")}
        {status === "error" && (detail ?? "Debug session failed")}
        {status === "unstarted" && "Ready to debug"}
      </Typography>
      {log.map((message, index) => (
        <Typography key={index} variant="body2">
          {message}
        </Typography>
      ))}
      {detail && status !== "done" && status !== "error" && (
        <Typography variant="body2">{detail}</Typography>
      )}
    </>
  );
};

export default EvaluatorOperationStatus;
