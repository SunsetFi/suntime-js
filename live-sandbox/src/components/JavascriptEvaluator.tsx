import React from "react";

import { StaticJsRealm, compileProgram } from "static-js";

import { SxProps } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

export interface JavascriptEvaluatorProps {
  sx?: SxProps;
  code: string;
}

const JavascriptEvaluator = ({ sx, code }: JavascriptEvaluatorProps) => {
  const [logs, setLogs] = React.useState<string[]>([]);
  const realm = React.useMemo(() => StaticJsRealm({
    globalObject: {
      value: {
        console: {
          log: (...args: any[]) => {
            setLogs(logs => [...logs, args.map(String).join(" ")]);
          }
        }
      }
    }
  }), []);

  const [generator, setGenerator] = React.useState<Generator | null>(null);
  const [compileTime, setCompileTime] = React.useState(0);
  const onCompile = React.useCallback(() => {
    try {
        const start = performance.now();
        const compilation = compileProgram(code);
        const generator = compilation.generator(realm);
        setCompileTime(performance.now() - start);
        setGenerator(generator);
      }
      catch(e: any) {
        setLogs([e.message]);
        setStatus("error");
      }
  }, [code]);

  const [status, setStatus] = React.useState<"running" | "done" | "error">("done");
  const [ops, setOps] = React.useState(0);

  React.useEffect(() => {
    if (generator == null) {
      return;
    }

    setStatus("running");
    setOps(0);
    setLogs([]);

    let timeout: number | null = null;
    function process() {
      console.log("Processing")
      for (let i = 0; i < 1000; i++) {
        try {
          const { done } = generator!.next();
          if (done) {
            setOps(ops => ops + i + 1);
            setStatus("done");
            return;
          }
        }
        catch(e: any) {
          setLogs(logs => [...logs, e.message]);
          setStatus("error");
          return;
        }
      }

      setOps(ops => ops + 1000);
      timeout = setTimeout(process, 10);
    }

    process();

    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    }
  }, [realm, generator]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", ...sx }}>
      {status !== "running" && <button onClick={onCompile}>Run</button>}
      {compileTime > 0 && <Typography>{`Compiled in ${compileTime.toFixed(2)}ms`}</Typography>}
      <Typography>
        {status === "running" && <CircularProgress size="1rem" sx={{ mr: 1 }} />}
        {status === "running" ? "Running" : "Done"}
        {` (${ops} ops)`}
      </Typography>
      {logs.map((log, i) => (
        <Typography key={i} variant="body2">
          {log}
        </Typography>
      ))}
    </Box>
  );
};

export default JavascriptEvaluator;
