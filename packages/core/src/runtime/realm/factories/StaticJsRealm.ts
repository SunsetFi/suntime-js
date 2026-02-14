import type { StaticJsTaskRunner } from "../../tasks/StaticJsTaskIterator.js";
import type { StaticJsRunTaskOptions } from "../../tasks/StaticJsRunTaskOptions.js";

import StaticJsRealmImpl from "../implementation/StaticJsRealmImpl.js";

import type {
  StaticJsModuleResolution,
  StaticJsModuleResolver,
} from "../StaticJsModuleResolver.js";

import type { StaticJsRealm as IStaticJsRealm } from "../StaticJsRealm.js";

import { realmDefaultHooks } from "../hooks/index.js";

import type { StaticJsRealmGlobalOption } from "./StaticJsRealmGlobalOptions.js";
import type { StaticJsRealmHookOptions } from "./StaticJsRealmHooksOptions.js";
import mergeDeep from "../../../utils/merge-deep.js";

/**
 * Options for creating a StaticJsRealm.
 */
export interface StaticJsRealmOptions {
  /**
   * Settings for the global 'this' object in the realm.
   */
  globalThis?: { value: unknown };

  /**
   * Settings for the global object in the realm.
   */
  global?: StaticJsRealmGlobalOption;

  /**
   * Statically defined ECMA Modules.
   */
  modules?: Record<string, StaticJsModuleResolution>;

  /**
   * Optional hooks to override engine behavior for various operations.
   */
  hooks?: StaticJsRealmHookOptions;

  /**
   * A resolver function to resolve imported ECMA Modules not found in {@link StaticJsRealmOptions.modules}
   */
  resolveImportedModule?: StaticJsModuleResolver;

  /**
   * Invoked when the realm wants to run a task.
   *
   * The implementation should call .next() on the evaluator until it is done.
   * This may be done synchronously or asynchronously.
   *
   * Used for
   * {@link IStaticJsRealm.evaluateExpression},
   * {@link IStaticJsRealm.evaluateScriptSync}, and
   * {@link IStaticJsRealm.evaluateModule} when the
   * {@link StaticJsRunTaskOptions.runTask} option is not specified.
   */
  runTask?: StaticJsTaskRunner;

  /**
   * Invoked when the realm wants to run a task synchronously.
   *
   * The implementation should call .next() on the evaluator until it is done.
   * This must be done synchronously.  Failure to complete the task will result in an error.
   *
   * Used for {@link IStaticJsRealm.evaluateExpressionSync} and
   * {@link IStaticJsRealm.evaluateScriptSync} when the
   * {@link StaticJsRunTaskOptions.runTask} option is not specified.
   */
  runTaskSync?: StaticJsTaskRunner;
}

/**
 * Creates a StaticJsRealm
 * @param opts - Options for creating the realm.
 * @returns The created realm.
 * @public
 */
function fStaticJsRealm(opts: StaticJsRealmOptions = {}): IStaticJsRealm {
  // Can't do this in the function signature as eslint gets irrational about it.
  const { hooks, ...restOpts } = opts;
  return new StaticJsRealmImpl(
    restOpts,
    mergeDeep(realmDefaultHooks, hooks ?? {}),
  );
}

// Let the function be used in instanceof checks.
// Delegate to StaticJsRealmImpl since it is the actual implementation of the realm.
Object.setPrototypeOf(fStaticJsRealm, {
  [Symbol.hasInstance](instance: unknown) {
    return instance instanceof StaticJsRealmImpl;
  },
});

interface StaticJsRealm {
  (opts?: StaticJsRealmOptions): IStaticJsRealm;
  new (opts?: StaticJsRealmOptions): IStaticJsRealm;
}

const StaticJsRealm: StaticJsRealm = fStaticJsRealm as StaticJsRealm;
export default StaticJsRealm;
