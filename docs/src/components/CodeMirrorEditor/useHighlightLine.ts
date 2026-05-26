import { Compartment, type Extension } from "@codemirror/state";
import { Decoration, EditorView } from "@codemirror/view";
import { useEffect, useRef, type RefObject } from "react";

const pausedLineBaseTheme = EditorView.baseTheme({
  ".cm-pausedLine": { backgroundColor: "rgba(255, 200, 0, 0.18)" },
});

export interface HighlightCompartmentConfig {
  compartment: Compartment;
  initialExtension: Extension;
}

export function useHighlightLine(
  viewRef: RefObject<EditorView | null>,
  highlightLine?: number | null,
): HighlightCompartmentConfig {
  const compartmentRef = useRef(new Compartment());
  const initialExtensionRef = useRef<Extension>(buildHighlightExtensions(highlightLine));

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: compartmentRef.current.reconfigure(buildHighlightExtensions(highlightLine)),
    });
  }, [highlightLine, viewRef]);

  return {
    compartment: compartmentRef.current,
    initialExtension: initialExtensionRef.current,
  };
}

function buildHighlightExtensions(line: number | null | undefined): Extension {
  return [pausedLineBaseTheme, buildHighlightExtension(line)];
}

function buildHighlightExtension(line: number | null | undefined): Extension {
  if (line == null) return [];
  return EditorView.decorations.of((view) => {
    if (line < 1 || line > view.state.doc.lines) return Decoration.none;
    const lineObj = view.state.doc.line(line);
    return Decoration.set([
      Decoration.line({ attributes: { class: "cm-pausedLine" } }).range(lineObj.from),
    ]);
  });
}
