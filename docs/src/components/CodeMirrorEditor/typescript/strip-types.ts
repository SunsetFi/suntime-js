import ts from "typescript";

import { TS_TARGET } from "./ts-environment";

/**
 * Removes TypeScript type annotations from `code`, returning runnable
 * JavaScript. This is a purely syntactic transform: no type checking is
 * performed and diagnostics are not reported, so type errors never block
 * execution.
 */
export function stripTypes(code: string): string {
  return ts.transpileModule(code, {
    compilerOptions: {
      target: TS_TARGET,
      module: ts.ModuleKind.ESNext,
    },
    reportDiagnostics: false,
  }).outputText;
}
