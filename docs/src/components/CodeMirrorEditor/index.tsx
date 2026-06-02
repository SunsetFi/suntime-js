import type { Extension } from "@codemirror/state";

import { EditorView } from "@codemirror/view";
import React, { type ReactNode } from "react";

import styles from "./styles.module.css";
import { CompartmentConfig, useCodeMirror } from "./useCodeMirror";

interface CodeMirrorEditorProps {
  ref: React.RefObject<EditorView | null>;
  value: string;
  onChange: (value: string) => void;
  extensions?: Extension[];
  compartments?: CompartmentConfig[];
}

export function CodeMirrorEditor({
  ref,
  value,
  onChange,
  extensions,
  compartments = [],
}: CodeMirrorEditorProps): ReactNode {
  const containerRef = useCodeMirror({
    value,
    onChange,
    extensions,
    viewRef: ref,
    compartments,
  });
  return <div ref={containerRef} className={styles.editor} />;
}
