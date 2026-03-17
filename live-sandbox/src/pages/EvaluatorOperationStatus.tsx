import React from "react";

import numeral from "numeral";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import ScriptInvocation from "@/models/ScriptInvocation";
import { useObservation } from "@/hooks/use-observation";

type EvaluatorOperationStatusProps = {
  invocation: ScriptInvocation | null;
};

const EvaluatorOperationStatus = ({
  invocation,
}: EvaluatorOperationStatusProps) => {
  const status = useObservation(invocation?.status$) ?? "unstarted";
  const log = useObservation(invocation?.log$) ?? [];
  const ops = useObservation(invocation?.operations$);
  const opsPerSecond = useObservation(invocation?.operationsPerSecond$) ?? 0;
  const line = useObservation(invocation?.line$) ?? -1;
  const column = useObservation(invocation?.column$) ?? -1;
  const operationType = useObservation(invocation?.operationType$) ?? null;
  const result = useObservation(invocation?.result$, { onError: "return" });

  const fmtOps = numeral(ops ?? 0).format("0.00a");

  return (
    <>
      <Typography>
        {status === "running" && (
          <>
            <CircularProgress size="1rem" sx={{ mr: 1 }} />
            Running ({fmtOps} ops, {numeral(opsPerSecond).format("0a")}/s)
          </>
        )}
        {status === "paused" &&
          `Paused at ${operationType} ${line}:${column} (${fmtOps} ops)`}
        {status === "done" && `Done after ${fmtOps} ops`}
      </Typography>
      {log.map((message, index) => (
        <Typography key={index} variant="body2">
          {message}
        </Typography>
      ))}
      {result !== undefined && stringify(result)}
    </>
  );
};

function stringify(value: unknown): string {
  if (value instanceof Error) {
    return `${value.name}: ${value.message}`;
  }

  return JSON.stringify(value, null, 2);
}

export default EvaluatorOperationStatus;
