import type { Extension } from "@codemirror/state";

import { EditorView } from "@codemirror/view";
import React, { useRef, type ReactNode } from "react";

import styles from "./styles.module.css";
import { useCodeMirror } from "./useCodeMirror";
import { useHighlightLine } from "./useHighlightLine";

interface CodeMirrorEditorProps {
  value: string;
  onChange: (value: string) => void;
  extensions?: Extension[];
  highlightLine?: number | null;
}

export function CodeMirrorEditor({
  value,
  onChange,
  extensions,
  highlightLine,
}: CodeMirrorEditorProps): ReactNode {
  const viewRef = useRef<EditorView | null>(null);
  const highlightConfig = useHighlightLine(viewRef, highlightLine);
  const containerRef = useCodeMirror({
    value,
    onChange,
    extensions,
    viewRef,
    compartments: [highlightConfig],
  });
  return <div ref={containerRef} className={styles.editor} />;
}
