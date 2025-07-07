export type {
  StaticJsRealmGlobalDecl,
  StaticJsRealmGlobalValue,
  StaticJsRealmOptions,
} from "./factories/StaticJsRealm.js";

import fStaticJsRealm from "./factories/StaticJsRealm.js";
import type { StaticJsRealm as IStaticJsRealm } from "./StaticJsRealm.js";

/**
 * {@inheritdoc fStaticJsRealm}
 * @public
 */
const StaticJsRealm = fStaticJsRealm;

/**
 * {@inheritdoc IStaticJsRealm}
 * @public
 */
type StaticJsRealm = IStaticJsRealm;

export { StaticJsRealm };

export type {
  StaticJsRunTaskOptions as StaticJsRunMacrotaskOptions,
  isStaticJsRealm,
} from "./StaticJsRealm.js";
export * from "./StaticJsTaskIterator.js";
