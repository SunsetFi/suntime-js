import { StaticJsTaskRunner } from "../tasks/StaticJsTaskRunner.js";

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
}
