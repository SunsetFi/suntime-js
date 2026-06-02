import {
  autocompletion,
  type CompletionContext,
  type CompletionResult,
} from "@codemirror/autocomplete";
import { linter } from "@codemirror/lint";
import { type Extension } from "@codemirror/state";
import { EditorView, hoverTooltip, keymap } from "@codemirror/view";

import type { BlockLanguageService } from "./block-language-service";
import {
  inBufferDefinitionRange,
  quickInfoAt,
  toCmCompletions,
  toCmDiagnostics,
} from "./cm-adapters";

/**
 * All CodeMirror extensions backed by `svc`'s language service: completion
 * source, async linter, hover quick-info, and in-buffer go-to-definition
 * (F12 and Cmd/Ctrl-click). The caller keeps `svc`'s buffer in sync.
 */
export function buildTypeScriptExtensions(svc: BlockLanguageService): Extension {
  const completionSource = (context: CompletionContext): CompletionResult | null => {
    const word = context.matchBefore(/[\w$]*/);
    // Trigger on an explicit request, after a member dot, or while typing a word.
    if (!context.explicit && (!word || (word.from === word.to && context.pos > 0))) {
      const before = context.state.sliceDoc(context.pos - 1, context.pos);
      if (before !== ".") return null;
    }
    const from = word ? word.from : context.pos;
    return toCmCompletions(svc.languageService, svc.filePath, context.pos, from);
  };

  const tsLinter = linter(() => toCmDiagnostics(svc.languageService, svc.filePath));

  const tsHover = hoverTooltip((_view, pos) => {
    const info = quickInfoAt(svc.languageService, svc.filePath, pos);
    if (!info) return null;
    return {
      pos: info.from,
      end: info.to,
      create() {
        const dom = document.createElement("div");
        dom.className = "cm-ts-quickinfo";
        console.log("quickInfo", info.text);
        dom.textContent = info.text;
        return { dom };
      },
    };
  });

  function gotoDefinition(view: EditorView, pos: number): boolean {
    const range = inBufferDefinitionRange(svc.languageService, svc.filePath, pos);
    if (!range) return false;
    view.dispatch({ selection: { anchor: range.from, head: range.to }, scrollIntoView: true });
    return true;
  }

  const defKeymap = keymap.of([
    { key: "F12", run: (view) => gotoDefinition(view, view.state.selection.main.head) },
  ]);

  const clickToDefine = EditorView.domEventHandlers({
    mousedown(event, view) {
      if (!event.metaKey && !event.ctrlKey) return false;
      const pos = view.posAtCoords({ x: event.clientX, y: event.clientY });
      if (pos == null) return false;
      return gotoDefinition(view, pos);
    },
  });

  return [
    autocompletion({ override: [completionSource] }),
    tsLinter,
    tsHover,
    defKeymap,
    clickToDefine,
  ];
}
