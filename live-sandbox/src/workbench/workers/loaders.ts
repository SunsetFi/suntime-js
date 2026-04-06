import type { WorkerLoaderMap } from "../types/index.js";

/**
 * Default worker constructors keyed by the label passed to MonacoEnvironment.getWorker.
 *
 * Add or override entries when constructing WorkbenchBootstrap to customise
 * which workers are used (e.g. to swap in a custom TextMate grammar worker).
 */
export function getDefaultWorkerLoaders(): WorkerLoaderMap {
  return {
    TextEditorWorker: () =>
      new Worker(new URL("monaco-editor/esm/vs/editor/editor.worker.js", import.meta.url), {
        type: "module",
      }),
    TextMateWorker: () =>
      new Worker(
        new URL(
          "@codingame/monaco-vscode-textmate-service-override/worker",
          import.meta.url,
        ),
        { type: "module" },
      ),
    OutputLinkDetectionWorker: () =>
      new Worker(
        new URL(
          "@codingame/monaco-vscode-output-service-override/worker",
          import.meta.url,
        ),
        { type: "module" },
      ),
  };
}
