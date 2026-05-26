import { Compartment, EditorState, Transaction, type Extension } from "@codemirror/state";
import { EditorView, type ViewUpdate } from "@codemirror/view";
import { useEffect, useRef } from "react";

export function useCodeMirror({
  value,
  onChange,
  extensions = [],
}: {
  value: string;
  onChange: (value: string) => void;
  extensions?: Extension[];
}): React.RefObject<HTMLDivElement | null> {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const compartmentRef = useRef(new Compartment());
  // Keep onChange in a ref so the listener doesn't re-register on every render
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // Mount / unmount — create and destroy the EditorView
  useEffect(() => {
    if (!containerRef.current) return;

    const updateListener = EditorView.updateListener.of((update: ViewUpdate) => {
      if (update.docChanged) {
        onChangeRef.current(update.state.doc.toString());
      }
    });

    const state = EditorState.create({
      doc: value,
      extensions: [updateListener, compartmentRef.current.of(extensions)],
    });

    const view = new EditorView({ state, parent: containerRef.current });
    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
    // Intentionally empty deps — mount/unmount only.
    // Extensions are hot-swapped below; value is synced below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync externally-changed value (e.g. reset button) without moving the cursor
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    const current = view.state.doc.toString();
    if (current !== value) {
      view.dispatch({
        changes: { from: 0, to: current.length, insert: value },
        annotations: Transaction.addToHistory.of(false),
      });
    }
  }, [value]);

  // Must run after the mount effect — depends on viewRef.current being set.
  // Callers must stabilize this array (e.g. useMemo) to avoid reconfiguring on every render.
  // Hot-swap extensions via Compartment (the seam for future debugger extensions)
  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: compartmentRef.current.reconfigure(extensions),
    });
  }, [extensions]);

  return containerRef;
}
