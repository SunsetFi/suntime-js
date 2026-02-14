import type { StaticJsRunTaskOptions } from "../tasks/StaticJsRunTaskOptions.js";
import type { StaticJsRealm } from "./StaticJsRealm.js";

export interface StaticJsRealmEvaluateScriptOptions
  extends StaticJsRunTaskOptions {
  /**
   * An optional file name to associate with the script.
   */
  fileName?: string;

  /**
   * Whether to support top-level await in the script.
   * If true, evaluateScript will always return a promise.
   * If "auto", evaluateScript will return a promise if top-level await is used, otherwise it will return the result directly.
   * If false or omitted, top-level await is not supported and will throw a syntax error if used.
   *
   * Default: false
   * @see {@link StaticJsRealm["evaluateScript"]}
   */
  topLevelAwait?: boolean | "auto";
}

export type StaticJsRealmEvaluateScriptSyncOptions = Omit<
  StaticJsRealmEvaluateScriptOptions,
  "topLevelAwait"
>;
