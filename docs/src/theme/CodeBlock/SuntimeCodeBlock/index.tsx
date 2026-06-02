import type { WrapperProps } from "@docusaurus/types";
import type CodeBlockType from "@theme/CodeBlock";

import { closeBrackets, closeBracketsKeymap, completionKeymap } from "@codemirror/autocomplete";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import { bracketMatching } from "@codemirror/language";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { CodeRuntime, CodeRuntimeSpawnOptions } from "@site/src/code-runtime/CodeRuntime";
import { createStaticJsRealmApi } from "@site/src/code-runtime/staticjs-api";
import { CodeMirrorEditor } from "@site/src/components/CodeMirrorEditor";
import { mountQuickInfoTooltip } from "@site/src/components/CodeMirrorEditor/typescript/QuickInfoTooltip";
import { loadSuntimeCoreTypings } from "@site/src/components/CodeMirrorEditor/typescript/suntime-core-typings";
import { useBreakpoints } from "@site/src/components/CodeMirrorEditor/useBreakpoints";
import { useDocusaurusTheme } from "@site/src/components/CodeMirrorEditor/useDocusaurusTheme";
import { useHighlightLine } from "@site/src/components/CodeMirrorEditor/useHighlightLine";
import { useTypeScriptLanguageService } from "@site/src/components/CodeMirrorEditor/useTypeScriptLanguageService";
import { usePortals } from "@site/src/components/portals";
import useObservation from "@site/src/hooks/use-observation";
import { StaticJsModuleResolution } from "@suntime-js/core";
import React, { useCallback, useMemo, useRef, useState, useEffect, type ReactNode } from "react";

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

  const viewRef = useRef<EditorView | null>(null);

  const pausedLocation = useObservation(runtime.pausedLocation$);
  const pausedLine = pausedLocation?.line ?? null;
  const pausedLineConfig = useHighlightLine(viewRef, pausedLine);

  const breakpoints = useObservation(runtime.breakpoints$) ?? [];
  const breakpointConfig = useBreakpoints(viewRef, {
    onBreakpointAdded(line) {
      runtime.addBreakpoint(line);
    },
    onBreakpointRemoved(line) {
      runtime.removeBreakpoint(line);
    },
    breakpoints,
  });

  const coreDtsUrl = useBaseUrl("/suntime-core.d.ts");
  const typingsLoader = useCallback(() => loadSuntimeCoreTypings(coreDtsUrl), [coreDtsUrl]);

  const portals = usePortals();
  const mountTooltip = useCallback(
    (dom: HTMLElement, signature: string, documentation: string) =>
      mountQuickInfoTooltip(portals, dom, signature, documentation),
    [portals],
  );

  const typescriptConfig = useTypeScriptLanguageService(viewRef, {
    typingsLoader: exposeStaticJs ? typingsLoader : undefined,
    mountTooltip,
  });

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
            ref={viewRef}
            value={code}
            onChange={setCode}
            extensions={extensions}
            compartments={[pausedLineConfig, breakpointConfig, typescriptConfig]}
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
