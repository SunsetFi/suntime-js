import type { MonacoVscodeWorkerLoaderMap } from "@/monaco-vscode/types/MonacoVscodeBootstrap";

export function getDefaultWorkerLoaders(): MonacoVscodeWorkerLoaderMap {
  return {
    TextEditorWorker: () =>
      new Worker(new URL("monaco-editor/esm/vs/editor/editor.worker.js", import.meta.url), {
        type: "module",
      }),
    TextMateWorker: () =>
      new Worker(
        new URL("@codingame/monaco-vscode-textmate-service-override/worker", import.meta.url),
        { type: "module" },
      ),
  };
}
