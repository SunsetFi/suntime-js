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
import { CodeMirrorEditor } from "@site/src/components/CodeMirrorEditor";
import { useDocusaurusTheme } from "@site/src/components/CodeMirrorEditor/useDocusaurusTheme";
import useObservation from "@site/src/hooks/use-observation";
import React, { useMemo, useRef, useState, useEffect, type ReactNode } from "react";

import { CodeRuntime } from "../../../code-runtime/CodeRuntime";

import OutputPanel from "./OutputPanel";
import styles from "./styles.module.css";

type Props = WrapperProps<typeof CodeBlockType>;

export default function SuntimeCodeBlock(props: Props): ReactNode {
  const originalCodeRef = useRef(String(props.children ?? ""));
  const originalCode = originalCodeRef.current;

  const [code, setCode] = useState(originalCode);

  const runtime = useMemo(() => new CodeRuntime(), []);
  const log = useObservation(runtime.log$) ?? [];
  const status = useObservation(runtime.status$) ?? "idle";
  const pausedLocation = useObservation(runtime.pausedLocation$);
  const pausedLine = pausedLocation?.line ?? null;

  useEffect(() => {
    return () => {
      runtime.dispose();
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
    runtime.run({ code });
  }

  function handleStop() {
    runtime.terminate();
  }

  function handleReset() {
    setCode(originalCode);
  }

  function handlePause() {
    runtime.pause();
  }

  function handleResume() {
    runtime.resume();
  }

  function handleStep() {
    runtime.step();
  }

  return (
    <div className={styles.container}>
      <div className={styles.codePanel}>
        <CodeMirrorEditor
          value={code}
          onChange={setCode}
          extensions={extensions}
          highlightLine={pausedLine}
        />
        <button
          className={styles.resetButton}
          onClick={handleReset}
          disabled={code === originalCode}
          title="Reset to original"
        >
          Reset
        </button>
      </div>
      <OutputPanel
        log={log}
        status={status}
        onRun={handleRun}
        onStop={handleStop}
        onPause={handlePause}
        onResume={handleResume}
        onStep={handleStep}
      />
    </div>
  );
}
