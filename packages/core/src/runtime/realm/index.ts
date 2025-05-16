export type {
  StaticJsRealmGlobalDecl,
  StaticJsRealmGlobalValue,
  StaticJsRealmOptions,
} from "./factories/index.js";

import { StaticJsRealm as fStaticJsRealm } from "./factories/index.js";
import { StaticJsRealm as IStaticJsRealm } from "./interfaces/index.js";

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
export { isStaticJsRealm, type StaticJsModule } from "./interfaces/index.js";
