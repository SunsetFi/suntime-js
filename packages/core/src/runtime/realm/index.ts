export type {
  StaticJsRealmGlobalDecl,
  StaticJsRealmGlobalValue,
  StaticJsRealmOptions,
} from "./factories/StaticJsRealm.js";

import fStaticJsRealm from "./factories/StaticJsRealm.js";
import { StaticJsRealm as IStaticJsRealm } from "./interfaces/StaticJsRealm.js";

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
