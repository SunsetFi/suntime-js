import { CodeRuntimeLog, CodeRuntimeStatus } from "@site/src/code-runtime/CodeRuntime";
import React, { type ReactNode } from "react";

import styles from "./styles.module.css";

interface OutputPanelProps {
  log: CodeRuntimeLog[];
  status: CodeRuntimeStatus;
  onRun: () => void;
  onStop: () => void;
  onPause: () => void;
  onResume: () => void;
  onStep: () => void;
}

export default function OutputPanel({
  log: lines,
  status,
  onRun,
  onStop,
  onPause,
  onResume,
  onStep,
}: OutputPanelProps): ReactNode {
  const outputRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className={styles.outputPanel}>
      <div className={styles.toolbar}>
        {status === "running" && (
          <>
            <button className={styles.pauseButton} onClick={onPause}>
              Pause
            </button>
            <button className={styles.stopButton} onClick={onStop}>
              Stop
            </button>
          </>
        )}
        {status === "paused" && (
          <>
            <button className={styles.resumeButton} onClick={onResume}>
              Resume
            </button>
            <button className={styles.stepButton} onClick={onStep}>
              Step
            </button>
            <button className={styles.stopButton} onClick={onStop}>
              Stop
            </button>
          </>
        )}
        {(status === "idle" || status === "completed" || status === "errored") && (
          <button className={styles.runButton} onClick={onRun}>
            Run
          </button>
        )}
      </div>
      <div className={styles.output} ref={outputRef}>
        {lines.map((line, i) => (
          <div
            key={i}
            className={`${styles.outputLine} ${
              line.kind === "error"
                ? styles.errorLine
                : line.kind === "return"
                  ? styles.returnLine
                  : styles.logLine
            }`}
          >
            {line.kind === "log" && <span>{line.text}</span>}
            {line.kind === "return" && (
              <span>
                <span className={styles.returnLine}>→</span> {line.text}
              </span>
            )}
            {line.kind === "error" && (
              <span>
                <span className={styles.errorLine}>✗</span> {line.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
