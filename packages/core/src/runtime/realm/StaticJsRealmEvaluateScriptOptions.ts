import { StaticJsRealmEvaluateSourceOptions } from "./StaticJsRealmEvaluateSourceOptions.js";

export interface StaticJsRealmEvaluateScriptOptions extends StaticJsRealmEvaluateSourceOptions {
  /**
   * Whether to support top-level await in the script.
   * If true, evaluateScript will always return a promise.
   * If "auto", evaluateScript will return a promise if top-level await is used, otherwise it will return the result directly.
   * If false or omitted, top-level await is not supported and will throw a syntax error if used.
   *
   * Default: false
   */
  topLevelAwait?: boolean | "auto";
}

export type StaticJsRealmEvaluateScriptSyncOptions = Omit<
  StaticJsRealmEvaluateScriptOptions,
  "topLevelAwait"
>;
