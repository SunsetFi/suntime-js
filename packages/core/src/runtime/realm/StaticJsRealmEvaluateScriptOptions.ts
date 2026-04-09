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

  /**
   * Whether to enable strict mode for the script. If true, the script will be evaluated in strict mode.
   * If false or omitted, the script will inherit strict mode from its directives.
   *
   * Default: false
   */
  strict?: boolean;
}

export type StaticJsRealmEvaluateScriptSyncOptions = Omit<
  StaticJsRealmEvaluateScriptOptions,
  "topLevelAwait"
>;
