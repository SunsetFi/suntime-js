import type { WrapperProps } from "@docusaurus/types";
import type CodeBlockType from "@theme/CodeBlock";

import {
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
} from "@codemirror/autocomplete";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import { bracketMatching } from "@codemirror/language";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import {
  StaticJsRealm,
  StaticJsTaskAbortedError,
  type StaticJsTypeFactory,
  type StaticJsPropertyDescriptorRecord,
  createTimeBoundTaskRunner,
  createTimeSharingTaskRunner,
} from "@suntime-js/core";
import React, { useMemo, useRef, useState, useEffect, type ReactNode } from "react";

import { CodeMirrorEditor } from "../../../components/CodeMirrorEditor";
import { useDocusaurusTheme } from "../../../components/CodeMirrorEditor/useDocusaurusTheme";

import OutputPanel, { type OutputLine } from "./OutputPanel";
import { serialize } from "./serialize";
import styles from "./styles.module.css";

type Props = WrapperProps<typeof CodeBlockType>;
type Status = "idle" | "running" | "completed" | "stopped" | "errored";

const MAX_OUTPUT_LINES = 100;

export default function SuntimeCodeBlock(props: Props): ReactNode {
  const originalCodeRef = useRef(String(props.children ?? ""));
  const originalCode = originalCodeRef.current;
  const [code, setCode] = useState(originalCode);
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

  const theme = useDocusaurusTheme();

  const extensions = useMemo(
    () => [
      javascript({ typescript: false }),
      lineNumbers(),
      bracketMatching(),
      closeBrackets(),
      autocompletion(),
      history(),
      keymap.of([...defaultKeymap, ...historyKeymap, ...closeBracketsKeymap, ...completionKeymap]),
      EditorView.theme({
        "&": {
          fontSize: "var(--ifm-code-font-size)",
        },
        // CM6 sets font-family on .cm-scroller directly; target it here to override
        ".cm-scroller": {
          fontFamily: "var(--ifm-font-family-monospace)",
        },
      }),
      theme,
    ],
    [theme],
  );

  function handleRun() {
    taskRef.current?.abort();
    setLines([]);
    setStatus("running");

    const addLine = (line: OutputLine) => {
      if (mountedRef.current) {
        setLines((prev) => [...prev, line].slice(-MAX_OUTPUT_LINES));
      }
    };

    const runner = createTimeSharingTaskRunner({
      operationsPerIteration: 1000,
      yieldTime: 1,
    });

    const realm = createRealm(addLine);

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

  function handleReset() {
    setCode(originalCode);
  }

  return (
    <div className={styles.container}>
      <div className={styles.codePanel}>
        <CodeMirrorEditor value={code} onChange={setCode} extensions={extensions} />
        <button
          className={styles.resetButton}
          onClick={handleReset}
          disabled={code === originalCode}
          title="Reset to original"
        >
          Reset
        </button>
      </div>
      <OutputPanel lines={lines} status={status} onRun={handleRun} onStop={handleStop} />
    </div>
  );
}

function createRealm(addLine: (line: OutputLine) => void) {
  function makeLoggerProperty(
    types: StaticJsTypeFactory,
    name: string,
    kind: "log" | "error",
  ): StaticJsPropertyDescriptorRecord {
    return {
      value: types.function(name, function* (...args) {
        addLine({
          kind,
          text: args
            .map((x) => x.toNative())
            .map(serialize)
            .join(" "),
        });
        return types.undefined;
      }),
      enumerable: false,
      writable: true,
      configurable: true,
    };
  }

  return StaticJsRealm({
    runTask: createTimeSharingTaskRunner({
      operationsPerIteration: 1000,
      yieldTime: 1,
    }),
    runTaskSync: createTimeBoundTaskRunner(),
    global: (types) =>
      types.object({
        console: {
          value: types.object({
            log: makeLoggerProperty(types, "log", "log"),
            warn: makeLoggerProperty(types, "warn", "log"),
            error: makeLoggerProperty(types, "error", "error"),
            info: makeLoggerProperty(types, "info", "log"),
          }),
          enumerable: false,
          writable: true,
          configurable: true,
        },
      }),
  });
}
