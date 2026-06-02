import { Compartment, type Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import useLatest from "@site/src/hooks/use-latest";
import { useEffect, useRef, type RefObject } from "react";

import {
  breakpointFieldInit,
  breakpointGutter,
  breakpointLines,
  diffBreakpointLines,
  setBreakpointsEffect,
} from "./breakpoint-state";

export interface BreakpointCompartmentConfig {
  compartment: Compartment;
  initialExtension: Extension;
}

export interface UseBreakpointsOptions {
  onBreakpointAdded?: (line: number) => void;
  onBreakpointRemoved?: (line: number) => void;
  // When provided, the editor is controlled: this array is the source of truth
  // for which lines show a breakpoint. Gutter clicks only fire callbacks; the
  // caller must update this array to change what renders. Omit for uncontrolled.
  breakpoints?: number[];
}

function sameSet(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  const set = new Set(a);
  return b.every((line) => set.has(line));
}

export function useBreakpoints(
  viewRef: RefObject<EditorView | null>,
  { onBreakpointAdded, onBreakpointRemoved, breakpoints }: UseBreakpointsOptions,
): BreakpointCompartmentConfig {
  const controlled = breakpoints !== undefined;

  const onAddedRef = useLatest(onBreakpointAdded);
  const onRemovedRef = useLatest(onBreakpointRemoved);
  const controlledRef = useLatest(controlled);

  const compartmentRef = useRef(new Compartment());
  const initialExtensionRef = useRef<Extension>(
    buildExtensions({
      initialBreakpoints: breakpoints ?? [],
      onAddedRef,
      onRemovedRef,
      controlledRef,
      viewRef,
    }),
  );

  // Controlled sync: make the field reflect the breakpoints prop. Runs after
  // mount (initial controlled breakpoints are baked into initialExtension), and
  // is idempotent — if the field already matches the prop, nothing is dispatched.
  useEffect(() => {
    if (breakpoints === undefined) return;
    const view = viewRef.current;
    if (!view) return;
    if (sameSet(breakpointLines(view.state), breakpoints)) return;
    view.dispatch({ effects: setBreakpointsEffect.of(breakpoints) });
  }, [breakpoints, viewRef]);

  return {
    compartment: compartmentRef.current,
    initialExtension: initialExtensionRef.current,
  };
}

function buildExtensions({
  initialBreakpoints,
  onAddedRef,
  onRemovedRef,
  controlledRef,
  viewRef,
}: {
  initialBreakpoints: number[];
  onAddedRef: RefObject<((line: number) => void) | undefined>;
  onRemovedRef: RefObject<((line: number) => void) | undefined>;
  controlledRef: RefObject<boolean>;
  viewRef: RefObject<EditorView | null>;
}): Extension {
  const gutter = breakpointGutter({
    onToggle(line, hasBreakpoint) {
      // Notify the caller. In controlled mode this is the only effect of a
      // click — the caller updates the breakpoints prop to change what renders.
      if (hasBreakpoint) {
        onRemovedRef.current?.(line);
      } else {
        onAddedRef.current?.(line);
      }
      if (controlledRef.current) return;

      // Uncontrolled: own the state and toggle the field directly.
      const view = viewRef.current;
      if (!view) return;
      const current = breakpointLines(view.state);
      const next = hasBreakpoint ? current.filter((l) => l !== line) : [...current, line];
      view.dispatch({ effects: setBreakpointsEffect.of(next) });
    },
  });

  // Report edit-driven moves as removed/added pairs so the caller's state stays
  // in sync. Positions are already mapped by the field; we diff the resulting
  // line numbers. Pure-effect transactions (toggles, controlled sync) are not
  // docChanged, so they never double-report.
  const moveReporter = EditorView.updateListener.of((update) => {
    if (!update.docChanged) return;
    const { added, removed } = diffBreakpointLines(
      breakpointLines(update.startState),
      breakpointLines(update.state),
    );
    removed.forEach((line) => onRemovedRef.current?.(line));
    added.forEach((line) => onAddedRef.current?.(line));
  });

  return [breakpointFieldInit(initialBreakpoints), gutter, moveReporter];
}
