import React from "react";

import { Subscription } from "rxjs";

import { SxProps } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import ScriptInvocation from "@/models/ScriptInvocation";

export interface JavascriptEvaluatorProps {
  sx?: SxProps;
  code: string;
}

const JavascriptEvaluator = ({ sx, code }: JavascriptEvaluatorProps) => {
  const invocationRef = React.useRef<ScriptInvocation | null>(null);
  const subscriptionsRef = React.useRef<Subscription[]>([]);

  const [running, setRunning] = React.useState(false);
  const [log, setLog] = React.useState<string[]>([]);
  const [result, setResult] = React.useState<unknown>(undefined);
  const [ops, setOps] = React.useState(0);
  const [runStart, setRunStart] = React.useState(0);
  const [runEnd, setRunEnd] = React.useState(0);

  const cleanup = React.useCallback(() => {
    if (invocationRef.current) {
      invocationRef.current = null;
    }
    if (subscriptionsRef.current.length > 0) {
      subscriptionsRef.current.forEach((sub) => sub.unsubscribe());
      subscriptionsRef.current = [];
    }
  }, []);

  const onAbort = React.useCallback(() => {
    if (invocationRef.current) {
      invocationRef.current.abort();
    }
    cleanup();
    setRunning(false);
    setLog((prev) => [...prev, "Aborted"]);
  }, [cleanup]);

  const onRun = React.useCallback(() => {
    cleanup();

    setLog([]);
    setResult(undefined);
    setOps(0);

    const invocation = new ScriptInvocation(code);
    invocationRef.current = invocation;

    function onResult(result: unknown) {
      setResult(result);
      setRunEnd(performance.now());
      setRunning(false);
      cleanup();
    }

    subscriptionsRef.current = [
      invocation.log$.subscribe((message) => {
        setLog((prev) => [...prev, message]);
      }),
      invocation.operations$.subscribe((ops) => {
        setOps(ops);
      }),
      invocation.result$.subscribe({
        next: onResult,
        error: (error) => {
          setLog((prev) => [...prev, `Error: ${error.message}`]);
          onResult(error);
        },
      }),
    ];

    invocation.run();
    setRunning(true);
    setRunStart(performance.now());
  }, [code]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", ...sx }}>
      {!running && <button onClick={onRun}>Run</button>}
      {running && <button onClick={onAbort}>Abort</button>}
      <Typography>
        {running && <CircularProgress size="1rem" sx={{ mr: 1 }} />}
        {running
          ? `Running (${ops} ops)`
          : `Done (${ops} ops, ${runEnd - runStart}ms)`}
      </Typography>
      {log.map((message, i) => (
        <Typography key={i} variant="body2">
          {message}
        </Typography>
      ))}
      {result !== undefined && JSON.stringify(result, null, 2)}
    </Box>
  );
};

export default JavascriptEvaluator;
