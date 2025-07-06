import React from "react";

import { StaticJsRealm, type StaticJsTaskIterator } from "@suntime-js/core";

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
  const [task, setTask] = React.useState<StaticJsTaskIterator | null>(null);
  const [compileTime, setCompileTime] = React.useState(0);
  const onCompile = React.useCallback(async () => {
    try {
      const realm = StaticJsRealm({
        globalObject: {
          value: {
            console: {
              log: (...args: any[]) => {
                setLogs((logs) =>
                  [...logs, args.map(String).join(" ")].slice(-100)
                );
              },
            },
          },
        },
      });

      const start = performance.now();
      const task = await new Promise<StaticJsTaskIterator>((resolve) =>
        realm.evaluateScript(code, { taskRunner: resolve }).catch((err) => {
          setLogs((logs) => logs.concat(["Runtime error: " + err.message]));
          setStatus("error");
        })
      );
      setCompileTime(performance.now() - start);
      setTask(task);
    } catch (e: any) {
      setLogs([e.message]);
      setStatus("error");
    }
  }, [code]);

  const onAbort = React.useCallback(() => {
    if (task == null) {
      return;
    }
    task.abort();
    setTask(null);
    setStatus("done");
    setRunEnd(performance.now());
  }, [task]);

  const [status, setStatus] = React.useState<"running" | "done" | "error">(
    "done"
  );
  const [runStart, setRunStart] = React.useState(0);
  const [runEnd, setRunEnd] = React.useState(0);
  const [ops, setOps] = React.useState(0);

  React.useEffect(() => {
    if (task == null) {
      return;
    }

    const caturedTask = task;

    setStatus("running");
    setOps(0);
    setLogs([]);

    setRunEnd(0);
    setRunStart(performance.now());

    function onDone() {
      setRunEnd(performance.now());
      setStatus("done");
    }

    let timeout: number | null = null;
    function process() {
      for (let i = 0; i < 1000; i++) {
        if (caturedTask.aborted) {
          // We may have aborted externally.
          return;
        }

        try {
          const { done } = task!.next();
          if (done) {
            setOps((ops) => ops + i + 1);
            onDone();
            return;
          }
        } catch (e: any) {
          setLogs((logs) => [...logs, e.message]);
          setRunEnd(performance.now());
          setStatus("error");
          return;
        }
      }

      setOps((ops) => ops + 1000);
      timeout = setTimeout(process, 10);
    }

    process();

    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [task]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", ...sx }}>
      {status !== "running" && <button onClick={onCompile}>Run</button>}
      {status === "running" && <button onClick={onAbort}>Abort</button>}
      {compileTime > 0 && (
        <Typography>{`Compiled in ${compileTime}ms`}</Typography>
      )}
      <Typography>
        {status === "running" && (
          <CircularProgress size="1rem" sx={{ mr: 1 }} />
        )}
        {status === "running"
          ? `Running (${ops} ops)`
          : `Done (${ops} ops, ${runEnd - runStart}ms)`}
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
