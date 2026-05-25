import React, { type ReactNode } from "react";

import styles from "./styles.module.css";

export interface OutputLine {
  kind: "log" | "return" | "error";
  text: string;
}

interface OutputPanelProps {
  lines: OutputLine[];
  status: "idle" | "running" | "completed" | "stopped" | "errored";
  onRun: () => void;
  onStop: () => void;
}

export default function OutputPanel({ lines, status, onRun, onStop }: OutputPanelProps): ReactNode {
  const isRunning = status === "running";

  const outputRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className={styles.outputPanel}>
      <div className={styles.toolbar}>
        {isRunning ? (
          <button className={styles.stopButton} onClick={onStop}>
            Stop
          </button>
        ) : (
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
