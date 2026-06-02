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

const logLineClassnames: Record<CodeRuntimeLog["kind"], string> = {
  log: styles.logLine,
  error: styles.errorLine,
  warning: styles.warningLine,
  return: styles.returnLine,
};

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
          <>
            <button className={styles.runButton} onClick={onRun}>
              Run
            </button>
            <button className={styles.stepButton} onClick={onStep}>
              Step
            </button>
          </>
        )}
      </div>
      <div className={styles.output} ref={outputRef}>
        {lines.map((line, i) => (
          <div key={i} className={styles.outputLine}>
            <span className={logLineClassnames[line.kind]}>{line.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
