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

const App = () => {
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
    <Box sx={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Editor
        width="60vw"
        height="100vh"
        language="javascript"
        value={code}
        onChange={onCodeChange}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
    </Box>
  );
};

function stringify(value: unknown): string {
  if (value instanceof Error) {
    return `${value.name}: ${value.message}`;
  }

  return JSON.stringify(value, null, 2);
}

export default App;
