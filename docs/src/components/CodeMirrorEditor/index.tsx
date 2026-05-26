import type { Extension } from "@codemirror/state";

import React, { type ReactNode } from "react";

import styles from "./styles.module.css";
import { useCodeMirror } from "./useCodeMirror";

interface CodeMirrorEditorProps {
  value: string;
  onChange: (value: string) => void;
  extensions?: Extension[];
}

export function CodeMirrorEditor({
  value,
  onChange,
  extensions,
}: CodeMirrorEditorProps): ReactNode {
  const containerRef = useCodeMirror({ value, onChange, extensions });
  return <div ref={containerRef} className={styles.editor} />;
}
