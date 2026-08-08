import type { StaticJsGraphLoadingState } from "#modules/implementation/StaticJsGraphLoadingState.js";
import type { StaticJsModuleReferrer } from "#modules/StaticJsModuleReferrer.js";
import type { StaticJsModuleRequest } from "#modules/StaticJsModuleRequest.js";

import { isStaticJsRealm, type StaticJsRealm } from "#realm/StaticJsRealm.js";

import type { StaticJsHostLoadImportedModuleHostDefined } from "../StaticJsHostLoadImportedModuleHostDefined.js";

export function hostLoadImportedModule(
  referrer: StaticJsModuleReferrer,
  moduleRequest: StaticJsModuleRequest,
  hostDefined: StaticJsHostLoadImportedModuleHostDefined,
  payload: StaticJsGraphLoadingState,
): void {
  let realm: StaticJsRealm;
  if (isStaticJsRealm(referrer)) {
    realm = referrer;
  } else {
    realm = referrer.realm;
  }

  realm.loadImportedModule(referrer, moduleRequest, hostDefined, payload);
}
