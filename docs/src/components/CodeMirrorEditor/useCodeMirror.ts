import { Compartment, EditorState, Transaction, type Extension } from "@codemirror/state";
import { EditorView, type ViewUpdate } from "@codemirror/view";
import useLatest from "@site/src/hooks/use-latest";
import { useEffect, useRef, type RefObject } from "react";

export interface CompartmentConfig {
  compartment: Compartment;
  initialExtension?: Extension;
}

export function useCodeMirror({
  value,
  onChange,
  extensions = [],
  viewRef: externalViewRef,
  compartments = [],
}: {
  value: string;
  onChange: (value: string) => void;
  extensions?: Extension[];
  viewRef?: RefObject<EditorView | null>;
  compartments?: CompartmentConfig[];
}): React.RefObject<HTMLDivElement | null> {
  const containerRef = useRef<HTMLDivElement>(null);
  const internalViewRef = useRef<EditorView | null>(null);
  const effectiveViewRef = externalViewRef ?? internalViewRef;
  const compartmentRef = useRef(new Compartment());

  // Keep onChange in a ref so the listener doesn't re-register on every render
  const onChangeRef = useLatest(onChange);

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
      extensions: [
        updateListener,
        compartmentRef.current.of(extensions),
        ...compartments.map(({ compartment, initialExtension = [] }) =>
          compartment.of(initialExtension),
        ),
      ],
    });

    const view = new EditorView({ state, parent: containerRef.current });
    effectiveViewRef.current = view;

    return () => {
      view.destroy();
      effectiveViewRef.current = null;
    };
  }, []);

  // Sync externally-changed value (e.g. reset button) without moving the cursor
  useEffect(() => {
    const view = effectiveViewRef.current;
    if (!view) return;
    const current = view.state.doc.toString();
    if (current !== value) {
      view.dispatch({
        changes: { from: 0, to: current.length, insert: value },
        annotations: Transaction.addToHistory.of(false),
      });
    }
  }, [value]);

  // Must run after the mount effect — depends on effectiveViewRef.current being set.
  // Callers must stabilize this array (e.g. useMemo) to avoid reconfiguring on every render.
  // Hot-swap extensions via Compartment (the seam for future debugger extensions)
  useEffect(() => {
    const view = effectiveViewRef.current;
    if (!view) return;
    view.dispatch({
      effects: compartmentRef.current.reconfigure(extensions),
    });
  }, [extensions]);

  return containerRef;
}
