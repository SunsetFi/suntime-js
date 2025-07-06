import React from "react";

import numeral from "numeral";

import { SxProps } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import ScriptInvocation from "@/models/ScriptInvocation";
import { useObservation } from "@/hooks/use-observation";

export interface JavascriptEvaluatorProps {
  sx?: SxProps;
  code: string;
}

const JavascriptEvaluator = ({ sx, code }: JavascriptEvaluatorProps) => {
  const [invocation, setInvocation] = React.useState<ScriptInvocation | null>(
    null
  );

  const status = useObservation(invocation?.status$) ?? "unstarted";
  const log = useObservation(invocation?.log$) ?? [];
  const result = useObservation(invocation?.result$, { onError: "return" });
  const ops = useObservation(invocation?.operations$);

  const onAbort = React.useCallback(() => {
    invocation?.abort();
  }, [invocation]);

  const onRun = React.useCallback(() => {
    const invocation = new ScriptInvocation(code);
    setInvocation(invocation);

    invocation.run();
  }, [code]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", ...sx }}>
      {status !== "running" && <button onClick={onRun}>Run</button>}
      {status === "running" && <button onClick={onAbort}>Abort</button>}
      <Typography>
        {status === "running" && (
          <>
            <CircularProgress size="1rem" sx={{ mr: 1 }} />
            Running ({numeral(ops).format("0a")} ops)
          </>
        )}
        {status === "done" && `Done (${numeral(ops).format("0a")} ops)`}
      </Typography>
      {log.map((message, i) => (
        <Typography key={i} variant="body2">
          {message}
        </Typography>
      ))}
      {result !== undefined && stringify(result)}
    </Box>
  );
};

function stringify(value: unknown): string {
  if (value instanceof Error) {
    return `${value.name}: ${value.message}`;
  }

  return JSON.stringify(value, null, 2);
}

export default JavascriptEvaluator;
