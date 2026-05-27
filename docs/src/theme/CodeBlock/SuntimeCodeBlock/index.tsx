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
import { CodeRuntime, CodeRuntimeSpawnOptions } from "@site/src/code-runtime/CodeRuntime";
import { createStaticJsRealmApi } from "@site/src/code-runtime/staticjs-api";
import { CodeMirrorEditor } from "@site/src/components/CodeMirrorEditor";
import { useDocusaurusTheme } from "@site/src/components/CodeMirrorEditor/useDocusaurusTheme";
import useObservation from "@site/src/hooks/use-observation";
import { StaticJsModuleResolution } from "@suntime-js/core";
import React, { useMemo, useRef, useState, useEffect, type ReactNode } from "react";

import OutputPanel from "./OutputPanel";
import styles from "./styles.module.css";

type Props = WrapperProps<typeof CodeBlockType> & {
  exposeStaticJs?: boolean;
};

export default function SuntimeCodeBlock({ exposeStaticJs, children }: Props): ReactNode {
  const originalCodeRef = useRef(String(children ?? ""));
  const originalCode = originalCodeRef.current;

  const [code, setCode] = useState(originalCode);

  const runtime = useMemo(() => {
    let resolveModule: (
      specifier: string,
      options: CodeRuntimeSpawnOptions,
    ) => StaticJsModuleResolution | null = () => null;
    if (exposeStaticJs) {
      resolveModule = (specifier, opts): StaticJsModuleResolution | null => {
        if (specifier === "@suntime-js/core") {
          return {
            exports: createStaticJsRealmApi(opts),
          };
        }

        return null;
      };
    }
    return new CodeRuntime({
      resolveModule,
    });
  }, [exposeStaticJs]);

  const log = useObservation(runtime.log$) ?? [];
  const status = useObservation(runtime.status$) ?? "idle";
  const pausedLocation = useObservation(runtime.pausedLocation$);
  const pausedLine = pausedLocation?.line ?? null;

  useEffect(() => {
    return () => {
      runtime.dispose();
    };
  }, [runtime]);

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
    runtime.run({ sourceKind: exposeStaticJs ? "module" : "script", code });
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
      <div className={styles.panes}>
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
      {exposeStaticJs && (
        <span className={styles.noSandboxDisclaimer}>
          Note: This instance exposes the @suntime-js/core module, and therefore this editor is not
          a secure sandbox.
        </span>
      )}
    </div>
  );
}
