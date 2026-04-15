export type { StaticJsRealmOptions } from "./factories/StaticJsRealm.js";

export type {
  StaticJsRealmGlobalAccessorPropertyDecl,
  StaticJsRealmGlobalDataPropertyDecl,
  StaticJsRealmGlobalDecl,
  StaticJsRealmGlobalDeclProperty,
  StaticJsRealmGlobalOption,
  StaticJsRealmGlobalValue,
} from "./factories/StaticJsRealmGlobalOptions.js";
export type { StaticJsRealmHookOptions } from "./factories/StaticJsRealmHooksOptions.js";

export type {
  StaticJsRealmEvaluateScriptSyncOptions as StaticJsEvaluateScriptSyncOptions,
  StaticJsRealmEvaluateScriptOptions,
} from "./StaticJsRealmEvaluateScriptOptions.js";

export type { StaticJsEvaluator as StaticJsRealmEvaluator } from "../../evaluator/StaticJsEvaluator.js";

import type { StaticJsRealm as IStaticJsRealm } from "./StaticJsRealm.js";

import { StaticJsRealm as fStaticJsRealm } from "./factories/StaticJsRealm.js";

const StaticJsRealm = fStaticJsRealm;
type StaticJsRealm = IStaticJsRealm;

/**
 * @typedef StaticJsRealm {fStaticJsRealm & IStaticJsRealm}
 */

export { StaticJsRealm };

export type { isStaticJsRealm } from "./StaticJsRealm.js";
