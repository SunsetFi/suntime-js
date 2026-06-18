import { type StaticJsTaskRunner } from "../tasks/StaticJsTaskRunner.js";
import type { HostAccessOptions } from "../types/HostAccessOptions.js";

/**
 * Configuration options for a StaticJsRealm instance.
 */
export interface StaticJsConfig {
  /**
   * The task runner used to run async tasks in the realm.
   */
  readonly runTask: StaticJsTaskRunner;

  /**
   * The task runner used to run sync tasks in the realm.
   */
  readonly runTaskSync: StaticJsTaskRunner;

  /**
   * Default host-access policy applied to `realm.types.toStaticJsValue(value)` calls
   * that do not pass their own opts. When explicit opts are passed, they fully
   * replace this default (no field-level merging).
   */
  readonly hostAccessDefaults?: HostAccessOptions;
}
