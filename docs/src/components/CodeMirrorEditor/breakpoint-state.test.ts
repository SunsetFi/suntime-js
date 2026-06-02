import { EditorState } from "@codemirror/state";
import { describe, expect, it } from "vitest";

import {
  breakpointField,
  breakpointFieldInit,
  breakpointLines,
  diffBreakpointLines,
  setBreakpointsEffect,
} from "./breakpoint-state";

function stateWith(doc: string, lines: number[] = []): EditorState {
  let state = EditorState.create({ doc, extensions: [breakpointField] });
  if (lines.length > 0) {
    state = state.update({ effects: setBreakpointsEffect.of(lines) }).state;
  }
  return state;
}

describe("breakpointField", () => {
  it("seeds breakpoints at the requested lines via setBreakpointsEffect", () => {
    const state = stateWith("a\nb\nc\nd", [2, 4]);
    expect(breakpointLines(state)).toEqual([2, 4]);
  });

  it("ignores line numbers outside the document", () => {
    const state = stateWith("a\nb", [0, 1, 5]);
    expect(breakpointLines(state)).toEqual([1]);
  });

  it("moves breakpoints down when text is inserted above them", () => {
    // breakpoint on line 2; insert a new line at the very start
    const state = stateWith("a\nb\nc", [2]);
    const next = state.update({ changes: { from: 0, insert: "x\n" } }).state;
    expect(breakpointLines(next)).toEqual([3]);
  });

  it("keeps breakpoints in place when text is inserted below them", () => {
    const state = stateWith("a\nb\nc", [1]);
    const next = state.update({
      changes: { from: state.doc.length, insert: "\nd" },
    }).state;
    expect(breakpointLines(next)).toEqual([1]);
  });

  it("replaces the whole set when setBreakpointsEffect is dispatched again", () => {
    const state = stateWith("a\nb\nc\nd", [1, 2]);
    const next = state.update({ effects: setBreakpointsEffect.of([3]) }).state;
    expect(breakpointLines(next)).toEqual([3]);
  });
});

describe("breakpointFieldInit", () => {
  it("bakes initial breakpoints into a freshly created state", () => {
    const state = EditorState.create({
      doc: "a\nb\nc",
      extensions: [breakpointFieldInit([2])],
    });
    expect(breakpointLines(state)).toEqual([2]);
  });
});

describe("diffBreakpointLines", () => {
  it("reports a moved breakpoint as a removed/added pair", () => {
    expect(diffBreakpointLines([5], [7])).toEqual({ added: [7], removed: [5] });
  });

  it("reports nothing when the sets are equal", () => {
    expect(diffBreakpointLines([1, 3], [3, 1])).toEqual({ added: [], removed: [] });
  });

  it("reports independent additions and removals", () => {
    expect(diffBreakpointLines([1, 2], [2, 4])).toEqual({ added: [4], removed: [1] });
  });
});
