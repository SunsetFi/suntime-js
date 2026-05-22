import React, { useEffect, useRef, useState, type ReactNode } from "react";
import CodeBlock from "@theme-original/CodeBlock";
import type CodeBlockType from "@theme/CodeBlock";
import type { WrapperProps } from "@docusaurus/types";

import {
  StaticJsRealm,
  StaticJsTaskAbortedError,
  createTimeSharingTaskRunner,
} from "@suntime-js/core";
import OutputPanel, { type OutputLine } from "./OutputPanel";
import { serialize } from "./serialize";
import styles from "./styles.module.css";

type Props = WrapperProps<typeof CodeBlockType>;
type Status = "idle" | "running" | "completed" | "stopped" | "errored";

const MAX_OUTPUT_LINES = 200;

export default function SuntimeCodeBlock(props: Props): ReactNode {
  const [lines, setLines] = useState<OutputLine[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const taskRef = useRef<{ abort: () => void } | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
      taskRef.current?.abort();
    };
  }, []);

  function handleRun() {
    taskRef.current?.abort();
    setLines([]);
    setStatus("running");

    const addLine = (line: OutputLine) => {
      if (mountedRef.current) {
        setLines((prev) => [...prev, line].slice(-MAX_OUTPUT_LINES));
      }
    };

    const realm = StaticJsRealm();
    realm.global.defineOwnPropertySync("console", {
      value: realm.types.toStaticJsValue({
        log: (...args: unknown[]) =>
          addLine({ kind: "log", text: args.map(serialize).join(" ") }),
        warn: (...args: unknown[]) =>
          addLine({ kind: "log", text: args.map(serialize).join(" ") }),
        error: (...args: unknown[]) =>
          addLine({ kind: "error", text: args.map(serialize).join(" ") }),
        info: (...args: unknown[]) =>
          addLine({ kind: "log", text: args.map(serialize).join(" ") }),
      }),
      writable: true,
      configurable: true,
      enumerable: false,
    });

    const code = String(props.children ?? "");
    const runner = createTimeSharingTaskRunner({
      operationsPerIteration: 1000,
      yieldTime: 1,
    });

    realm
      .evaluateScript(code, {
        runTask(task) {
          taskRef.current = task;
          runner(task);
        },
      })
      .then((result) => {
        if (!mountedRef.current) return;
        const val = serialize(result.toNative());
        if (val !== "undefined") {
          addLine({ kind: "return", text: val });
        }
        setStatus("completed");
      })
      .catch((err: unknown) => {
        if (!mountedRef.current) return;
        if (err instanceof StaticJsTaskAbortedError) {
          setStatus("stopped");
        } else {
          addLine({
            kind: "error",
            text: err instanceof Error ? err.message : String(err),
          });
          setStatus("errored");
        }
      })
      .finally(() => {
        taskRef.current = null;
      });
  }

  function handleStop() {
    taskRef.current?.abort();
  }

  return (
    <div className={styles.container}>
      <div className={styles.codePanel}>
        <CodeBlock {...props} />
      </div>
      <OutputPanel
        lines={lines}
        status={status}
        onRun={handleRun}
        onStop={handleStop}
      />
    </div>
  );
}
