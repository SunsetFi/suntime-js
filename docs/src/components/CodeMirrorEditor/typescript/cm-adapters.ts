import type { Completion, CompletionResult } from "@codemirror/autocomplete";
import type { Diagnostic } from "@codemirror/lint";

import ts from "typescript";

/** Map a TS completion entry kind to a CM completion `type` string. */
function kindToCmType(kind: ts.ScriptElementKind): string | undefined {
  switch (kind) {
    case ts.ScriptElementKind.memberFunctionElement:
    case ts.ScriptElementKind.functionElement:
    case ts.ScriptElementKind.localFunctionElement:
      return "function";
    case ts.ScriptElementKind.memberVariableElement:
    case ts.ScriptElementKind.memberGetAccessorElement:
    case ts.ScriptElementKind.memberSetAccessorElement:
      return "property";
    case ts.ScriptElementKind.variableElement:
    case ts.ScriptElementKind.letElement:
    case ts.ScriptElementKind.constElement:
    case ts.ScriptElementKind.parameterElement:
      return "variable";
    case ts.ScriptElementKind.classElement:
      return "class";
    case ts.ScriptElementKind.interfaceElement:
    case ts.ScriptElementKind.typeElement:
      return "type";
    case ts.ScriptElementKind.enumElement:
      return "enum";
    case ts.ScriptElementKind.keyword:
      return "keyword";
    default:
      return undefined;
  }
}

/**
 * Completions at `pos`. `from` is the start of the token being replaced (the CM
 * caller computes it from the word under the cursor). Returns null when TS has
 * nothing to offer.
 */
export function toCmCompletions(
  ls: ts.LanguageService,
  fileName: string,
  pos: number,
  from: number,
): CompletionResult | null {
  const completions = ls.getCompletionsAtPosition(fileName, pos, {});
  if (!completions || completions.entries.length === 0) return null;
  const options: Completion[] = completions.entries.map((entry) => ({
    label: entry.name,
    type: kindToCmType(entry.kind),
  }));
  return { from, options };
}

/** Combined syntactic + semantic diagnostics for the buffer file, in CM shape. */
export function toCmDiagnostics(ls: ts.LanguageService, fileName: string): Diagnostic[] {
  const tsDiags = [...ls.getSyntacticDiagnostics(fileName), ...ls.getSemanticDiagnostics(fileName)];
  const out: Diagnostic[] = [];
  for (const d of tsDiags) {
    if (d.start === undefined || d.length === undefined) continue;
    out.push({
      from: d.start,
      to: d.start + d.length,
      severity: d.category === ts.DiagnosticCategory.Warning ? "warning" : "error",
      message: ts.flattenDiagnosticMessageText(d.messageText, "\n"),
    });
  }
  return out;
}

export interface QuickInfo {
  from: number;
  to: number;
  /** The type/signature, as code (e.g. `const x: number`). */
  signature: string;
  /** JSDoc documentation prose, or "" when none. */
  documentation: string;
}

/** Hover quick-info (type/signature + docs) at `pos`, or null. */
export function quickInfoAt(
  ls: ts.LanguageService,
  fileName: string,
  pos: number,
): QuickInfo | null {
  const info = ls.getQuickInfoAtPosition(fileName, pos);
  if (!info) return null;
  const signature = ts.displayPartsToString(info.displayParts);
  if (!signature) return null;
  const documentation = ts.displayPartsToString(info.documentation ?? []);
  return {
    from: info.textSpan.start,
    to: info.textSpan.start + info.textSpan.length,
    signature,
    documentation,
  };
}

export interface DefinitionRange {
  from: number;
  to: number;
}

/**
 * Definition range at `pos` **only when it lives in the buffer file itself**.
 * Definitions in `.d.ts`/typings files return null (no cross-file navigation).
 */
export function inBufferDefinitionRange(
  ls: ts.LanguageService,
  fileName: string,
  pos: number,
): DefinitionRange | null {
  const defs = ls.getDefinitionAtPosition(fileName, pos);
  if (!defs) return null;
  const local = defs.find((d) => d.fileName === fileName);
  if (!local) return null;
  return { from: local.textSpan.start, to: local.textSpan.start + local.textSpan.length };
}
