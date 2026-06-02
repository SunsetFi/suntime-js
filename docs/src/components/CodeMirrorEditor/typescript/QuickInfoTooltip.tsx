import type { PortalStore } from "@site/src/components/portals";

import { javascript } from "@codemirror/lang-javascript";
import { defaultHighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import React, { useEffect, useRef, type ReactNode } from "react";

import { useDocusaurusTheme } from "../useDocusaurusTheme";

import styles from "./QuickInfoTooltip.module.css";

/**
 * A minimal, read-only CodeMirror instance used purely for syntax highlighting
 * and linefeed handling of a code snippet. No gutter, line numbers, cursor, or
 * editing. Mounted once per tooltip (props are fixed for its lifetime).
 */
function ReadOnlyCode({ code }: { code: string }): ReactNode {
  const theme = useDocusaurusTheme();
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const view = new EditorView({
      state: EditorState.create({
        doc: code,
        extensions: [
          javascript({ typescript: true }),
          EditorState.readOnly.of(true),
          EditorView.editable.of(false),
          EditorView.lineWrapping,
          syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
          EditorView.theme({
            "&": { fontSize: "var(--ifm-code-font-size)", backgroundColor: "transparent" },
            ".cm-scroller": { fontFamily: "var(--ifm-font-family-monospace)" },
            ".cm-content": { padding: "0" },
          }),
          theme,
        ],
      }),
      parent: host,
    });
    return () => view.destroy();
    // Mount once: a tooltip's code/theme never change during its short lifetime.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={hostRef} className={styles.code} />;
}

/** Hover quick-info: a highlighted signature with optional JSDoc prose below. */
export function QuickInfoTooltip({
  signature,
  documentation,
}: {
  signature: string;
  documentation: string;
}): ReactNode {
  return (
    <div className={styles.tooltip}>
      <ReadOnlyCode code={signature} />
      {documentation ? <div className={styles.docs}>{documentation}</div> : null}
    </div>
  );
}

/**
 * Render a {@link QuickInfoTooltip} into `dom` through the app-wide portal store,
 * so it stays in the React tree (and keeps Docusaurus context). Returns a
 * disposer.
 *
 * NB: we deliberately do NOT flushSync here. This runs inside CodeMirror's
 * tooltip `create()`, which executes while the editor's update is in progress;
 * forcing a synchronous React flush re-enters that update and throws "Calls to
 * EditorView.update are not allowed while an update is in progress". Letting the
 * portal render on React's next tick happens after the update completes, and
 * CodeMirror repositions the tooltip once content arrives.
 */
export function mountQuickInfoTooltip(
  portals: PortalStore,
  dom: HTMLElement,
  signature: string,
  documentation: string,
): () => void {
  const handle = portals.mount(
    dom,
    <QuickInfoTooltip signature={signature} documentation={documentation} />,
  );
  return () => handle.unmount();
}
