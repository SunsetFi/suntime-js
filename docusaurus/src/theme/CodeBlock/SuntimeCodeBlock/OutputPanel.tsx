import React, { type ReactNode } from 'react';
import styles from './styles.module.css';

export interface OutputLine {
  kind: 'log' | 'return' | 'error';
  text: string;
}

interface OutputPanelProps {
  lines: OutputLine[];
  status: 'idle' | 'running' | 'completed' | 'stopped' | 'errored';
  onRun: () => void;
  onStop: () => void;
}

export default function OutputPanel({ lines, status, onRun, onStop }: OutputPanelProps): ReactNode {
  const isRunning = status === 'running';

  return (
    <div className={styles.outputPanel}>
      <div className={styles.toolbar}>
        {isRunning ? (
          <button className={styles.stopButton} onClick={onStop}>Stop</button>
        ) : (
          <button className={styles.runButton} onClick={onRun}>Run</button>
        )}
      </div>
      <div className={styles.output}>
        {lines.map((line, i) => (
          <div
            key={i}
            className={`${styles.outputLine} ${
              line.kind === 'error' ? styles.errorLine :
              line.kind === 'return' ? styles.returnLine :
              styles.logLine
            }`}
          >
            {line.kind === 'log' && `[log] ${line.text}`}
            {line.kind === 'return' && `→ ${line.text}`}
            {line.kind === 'error' && `✗ ${line.text}`}
          </div>
        ))}
      </div>
    </div>
  );
}
