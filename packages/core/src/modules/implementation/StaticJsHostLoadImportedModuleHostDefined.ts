import type { StaticJsTaskRunner } from "#tasks/StaticJsTaskRunner.js";

export interface StaticJsHostLoadImportedModuleHostDefined {
  /**
   * The task runner to use when the last module loads and the module graph moves on to
   * evaluation.
   */
  runTask?: StaticJsTaskRunner;

  /**
   * The error handler to use for external (non-sandbox) errors.
   * @param err The error to handle.
   */
  onError(err: unknown): void;
}
