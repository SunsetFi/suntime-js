import { type Text, Prec, RangeSet, StateEffect, StateField } from "@codemirror/state";
import { EditorView, GutterMarker, gutter } from "@codemirror/view";

// Replaces the entire breakpoint set with markers at the given line numbers.
export const setBreakpointsEffect = StateEffect.define<number[]>();

class BreakpointMarker extends GutterMarker {
  toDOM(): Node {
    const dot = document.createElement("div");
    dot.className = "cm-breakpoint-dot";
    return dot;
  }
}

const breakpointMarker = new BreakpointMarker();

// Build a sorted range set with one marker at the start of each valid line.
function lineRangeSet(doc: Text, lines: number[]): RangeSet<GutterMarker> {
  const ranges = lines
    .filter((line) => line >= 1 && line <= doc.lines)
    .map((line) => breakpointMarker.range(doc.line(line).from));
  return RangeSet.of(ranges, /* sort */ true);
}

// Holds breakpoint markers anchored to document positions. Positions are mapped
// through document changes so markers follow the code as it is edited.
export const breakpointField = StateField.define<RangeSet<GutterMarker>>({
  create() {
    return RangeSet.empty;
  },
  update(value, tr) {
    for (const effect of tr.effects) {
      if (effect.is(setBreakpointsEffect)) {
        return lineRangeSet(tr.newDoc, effect.value);
      }
    }
    if (tr.docChanged) {
      return value.map(tr.changes);
    }
    return value;
  },
});

// Adds the breakpoint field with an initial set of breakpoints. Use this once,
// at editor construction, so controlled breakpoints are present before any
// per-render effect (which runs before the view exists on mount) can run.
export function breakpointFieldInit(initialLines: number[]) {
  return breakpointField.init((state) => lineRangeSet(state.doc, initialLines));
}

// The 1-based line numbers that currently carry a breakpoint, ascending.
export function breakpointLines(state: {
  field: (f: typeof breakpointField) => RangeSet<GutterMarker>;
  doc: Text;
}): number[] {
  const set = state.field(breakpointField);
  const lines: number[] = [];
  const iter = set.iter();
  while (iter.value) {
    lines.push(state.doc.lineAt(iter.from).number);
    iter.next();
  }
  return lines;
}

export interface BreakpointDiff {
  added: number[];
  removed: number[];
}

// Set difference between two line-number lists, preserving order of the input.
export function diffBreakpointLines(oldLines: number[], newLines: number[]): BreakpointDiff {
  const oldSet = new Set(oldLines);
  const newSet = new Set(newLines);
  return {
    added: newLines.filter((line) => !oldSet.has(line)),
    removed: oldLines.filter((line) => !newSet.has(line)),
  };
}

const breakpointBaseTheme = EditorView.baseTheme({
  ".cm-breakpoint-gutter": { width: "0.9em" },
  ".cm-breakpoint-gutter .cm-gutterElement": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  ".cm-breakpoint-dot": {
    width: "0.49em",
    height: "0.49em",
    borderRadius: "50%",
    backgroundColor: "#e51400",
    // Line-height centering lands on the line-box center, but a digit's ink
    // sits ~1px higher (font ascent > descent). Nudge up to match optically.
    transform: "translateY(-1px)",
  },
});

export interface BreakpointGutterHandlers {
  // Called when the gutter is clicked. `hasBreakpoint` reflects current state.
  onToggle: (line: number, hasBreakpoint: boolean) => void;
}

// A dedicated gutter rendering breakpoint dots, with a click handler that
// reports toggles. The handler decides whether to mutate state (uncontrolled)
// or merely notify (controlled). The breakpoint field must be added separately
// via breakpointFieldInit.
export function breakpointGutter(handlers: BreakpointGutterHandlers) {
  return [
    // High precedence so this gutter sorts to the left of the line numbers.
    Prec.high(
      gutter({
        class: "cm-breakpoint-gutter",
        markers: (view) => view.state.field(breakpointField),
        initialSpacer: () => breakpointMarker,
        domEventHandlers: {
          mousedown(view, block, event) {
            if ((event as MouseEvent).button !== 0) return false;
            const line = view.state.doc.lineAt(block.from).number;
            const hasBreakpoint = breakpointLines(view.state).includes(line);
            handlers.onToggle(line, hasBreakpoint);
            return true;
          },
        },
      }),
    ),
    breakpointBaseTheme,
  ];
}
