import type ts from "typescript";

import { Compartment, type Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import useLatest from "@site/src/hooks/use-latest";
import { useEffect, useId, useRef, type RefObject } from "react";

import { createBlockLanguageService, type TypingsFile } from "./typescript/block-language-service";
import { buildTypeScriptExtensions } from "./typescript/extensions";
import { getDefaultLibMap } from "./typescript/ts-environment";

export interface TypeScriptCompartmentConfig {
  compartment: Compartment;
  initialExtension: Extension;
}

export interface UseTypeScriptOptions {
  /** Default true. When false, the LS is never built and no extensions attach. */
  enabled?: boolean;
  /**
   * External `.d.ts` (and package.json) files injected into this block's env.
   * Async because typings may be fetched at runtime (see suntime-core-typings).
   * Omit for no external typings.
   */
  typingsLoader?: () => Promise<TypingsFile[]>;
  /** Compiler-option overrides merged over the block defaults. */
  compilerOptions?: ts.CompilerOptions;
}

function sanitize(id: string): string {
  return id.replace(/[^a-zA-Z0-9]/g, "");
}

export function useTypeScriptLanguageService(
  viewRef: RefObject<EditorView | null>,
  { enabled = true, typingsLoader, compilerOptions }: UseTypeScriptOptions = {},
): TypeScriptCompartmentConfig {
  const compartmentRef = useRef(new Compartment());
  const rawId = useId();
  const filePathRef = useRef(`/block-${sanitize(rawId)}.ts`);

  // Keep the latest values without re-running the async init effect.
  const typingsLoaderRef = useLatest(typingsLoader);
  const compilerOptionsRef = useLatest(compilerOptions);

  // Async init: load shared libs + typings, build the per-block LS, attach.
  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;

    void (async () => {
      const [libMap, typings] = await Promise.all([
        getDefaultLibMap(),
        typingsLoaderRef.current ? typingsLoaderRef.current() : Promise.resolve([]),
      ]);
      const view = viewRef.current;
      if (cancelled || !view) return;

      const svc = createBlockLanguageService({
        libMap,
        typings,
        initialDoc: view.state.doc.toString(),
        filePath: filePathRef.current,
        compilerOptions: compilerOptionsRef.current,
      });

      // Keep the LS buffer in sync with the editor.
      const sync = EditorView.updateListener.of((update) => {
        if (update.docChanged) svc.updateBuffer(update.state.doc.toString());
      });

      view.dispatch({
        effects: compartmentRef.current.reconfigure([sync, buildTypeScriptExtensions(svc)]),
      });
    })();

    return () => {
      cancelled = true;
      const view = viewRef.current;
      if (view) view.dispatch({ effects: compartmentRef.current.reconfigure([]) });
    };
  }, [enabled, viewRef, typingsLoaderRef, compilerOptionsRef]);

  return {
    compartment: compartmentRef.current,
    initialExtension: [],
  };
}
