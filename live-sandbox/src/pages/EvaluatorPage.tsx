import React from "react";

import numeral from "numeral";

import Editor from "@monaco-editor/react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import ScriptInvocation from "@/models/ScriptInvocation";
import { useObservation } from "@/hooks/use-observation";

const defaultCode = `// Write your JavaScript code here
console.log("Hello, world!");`;

const EvaluatorPage = () => {
  const [code, setCode] = React.useState<string>(defaultCode);
  const [invocation, setInvocation] = React.useState<ScriptInvocation | null>(
    null
  );

  const onCodeChange = React.useCallback((newCode: string | undefined) => {
    if (newCode !== undefined) {
      setCode(newCode);
    }
  }, []);

  const status = useObservation(invocation?.status$) ?? "unstarted";
  const log = useObservation(invocation?.log$) ?? [];
  const ops = useObservation(invocation?.operations$);
  const opsPerSecond = useObservation(invocation?.operationsPerSecond$) ?? 0;
  const line = useObservation(invocation?.line$) ?? -1;
  const column = useObservation(invocation?.column$) ?? -1;
  const operationType = useObservation(invocation?.operationType$) ?? null;

  const result = useObservation(invocation?.result$, { onError: "return" });

  const onAbort = React.useCallback(() => {
    invocation?.abort();
  }, [invocation]);

  const onRun = React.useCallback(() => {
    let inv = invocation;
    if (!inv || status !== "paused") {
      if (inv) {
        try {
          inv.abort();
        } catch {}
      }

      inv = new ScriptInvocation(code);
      setInvocation(inv);
    }

    inv.run();
  }, [status, code]);

  const onPause = React.useCallback(() => {
    if (invocation) {
      invocation.pause();
    }
  }, [invocation]);

  const onStep = React.useCallback(() => {
    let inv = invocation;
    if (!inv || status === "done") {
      inv = new ScriptInvocation(code);
      setInvocation(inv);
    }

    inv.step();
  }, [status, invocation]);

  const active = status === "running" || status === "paused";
  const fmtOps = numeral(ops ?? 0).format("0.00a");
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", height: "100vh", gap: 1 }}
    >
      <Editor
        width="60vw"
        height="100vh"
        language="javascript"
        value={code}
        onChange={onCodeChange}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ px: 1, pt: 1 }}>
          This demo is configured to automatically adjust its execution rate to
          limit itself to 20% of a 60 fps frame, or 3.4 ms of execution time per
          every 16.67 ms interval.
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1, py: 1 }}>
          {status !== "running" && <button onClick={onRun}>Run</button>}
          {status === "running" && <button onClick={onPause}>Pause</button>}
          <button onClick={onStep}>Step</button>
          {active && <button onClick={onAbort}>Abort</button>}
        </Box>
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
        {log.map((message, i) => (
          <Typography key={i} variant="body2">
            {message}
          </Typography>
        ))}
        {result !== undefined && stringify(result)}
      </Box>
    </Box>
  );
};

function stringify(value: unknown): string {
  if (value instanceof Error) {
    return `${value.name}: ${value.message}`;
  }

  return JSON.stringify(value, null, 2);
}

export default EvaluatorPage;
