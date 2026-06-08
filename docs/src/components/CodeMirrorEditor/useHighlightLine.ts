import { Compartment, type Extension } from "@codemirror/state";
import { Decoration, EditorView, WidgetType } from "@codemirror/view";
import { useEffect, useRef, type RefObject } from "react";

const pausedLineBaseTheme = EditorView.baseTheme({
  ".cm-pausedLine": { backgroundColor: "rgba(255, 200, 0, 0.18)" },
  ".cm-pausedColumnMarker": {
    color: "rgba(255, 160, 0, 0.9)",
    fontWeight: "bold",
  },
});

class PausedColumnWidget extends WidgetType {
  eq(): boolean {
    return true;
  }

  toDOM(): HTMLElement {
    const span = document.createElement("span");
    span.className = "cm-pausedColumnMarker";
    span.textContent = "▶";
    span.setAttribute("aria-hidden", "true");
    return span;
  }

  ignoreEvent(): boolean {
    return false;
  }
}

export interface HighlightCompartmentConfig {
  compartment: Compartment;
  initialExtension: Extension;
}

export function useHighlightLine(
  viewRef: RefObject<EditorView | null>,
  highlightLine?: number | null,
  highlightColumn?: number | null,
): HighlightCompartmentConfig {
  const compartmentRef = useRef(new Compartment());
  const initialExtensionRef = useRef<Extension>(
    buildHighlightExtensions(highlightLine, highlightColumn),
  );

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: compartmentRef.current.reconfigure(
        buildHighlightExtensions(highlightLine, highlightColumn),
      ),
    });
  }, [highlightLine, highlightColumn, viewRef]);

  return {
    compartment: compartmentRef.current,
    initialExtension: initialExtensionRef.current,
  };
}

function buildHighlightExtensions(
  line: number | null | undefined,
  column: number | null | undefined,
): Extension {
  return [pausedLineBaseTheme, buildHighlightExtension(line, column)];
}

function buildHighlightExtension(
  line: number | null | undefined,
  column: number | null | undefined,
): Extension {
  if (line == null) return [];
  return EditorView.decorations.of((view) => {
    if (line < 1 || line > view.state.doc.lines) return Decoration.none;
    const lineObj = view.state.doc.line(line);
    const decorations = [
      Decoration.line({ attributes: { class: "cm-pausedLine" } }).range(lineObj.from),
    ];
    if (column != null && column >= 0) {
      const pos = lineObj.from + Math.min(column, lineObj.length);
      decorations.push(
        Decoration.widget({ widget: new PausedColumnWidget(), side: -1 }).range(pos),
      );
    }
    return Decoration.set(decorations, true);
  });
}
