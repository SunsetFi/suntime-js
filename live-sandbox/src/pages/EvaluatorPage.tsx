import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import ScriptInvocation from "@/models/ScriptInvocation";
import { useObservation } from "@/hooks/use-observation";
import { MonacoVscodeRoot, createSandboxWorkspace } from "@/monaco-vscode";
import EvaluatorOperationStatus from "./EvaluatorOperationStatus";

const defaultCode = `// Write your JavaScript code here
console.log("Hello, world!");`;

const EvaluatorPage = () => {
  const [code, setCode] = React.useState<string>(defaultCode);
  const [invocation, setInvocation] = React.useState<ScriptInvocation | null>(
    null,
  );
  const initialWorkspace = React.useMemo(
    () => createSandboxWorkspace(defaultCode),
    [],
  );
  const onEditorEntryFileChange = React.useCallback((newCode: string) => {
    setCode((currentCode) => (currentCode === newCode ? currentCode : newCode));
  }, []);
  const bootstrapOptions = React.useMemo(
    () => ({
      workspace: initialWorkspace,
      vscodeApi: {
        configurationDefaults: {
          "editor.minimap.enabled": false,
        },
      },
    }),
    [initialWorkspace],
  );
  const editorOptions = React.useMemo(
    () => ({
      onEntryFileChange: onEditorEntryFileChange,
    }),
    [onEditorEntryFileChange],
  );

  const status = useObservation(invocation?.status$) ?? "unstarted";
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

  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", height: "100vh", gap: 1 }}
    >
      <Box sx={{ width: "60vw", height: "100vh" }}>
        <MonacoVscodeRoot
          bootstrapOptions={bootstrapOptions}
          editorOptions={editorOptions}
          fallback={
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress size="1.25rem" />
            </Box>
          }
        />
      </Box>
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
        <EvaluatorOperationStatus invocation={invocation} />
      </Box>
    </Box>
  );
};

export default EvaluatorPage;
