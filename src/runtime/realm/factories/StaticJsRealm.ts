import { StaticJsObjectPropertyDescriptor } from "../../primitives/index.js";

import StaticJsEnvRealm from "../implementation/StaticJsEnvRealm.js";
import { StaticJsRealm as IStaticJsRealm } from "../interfaces/index.js";

export interface StaticJsRealmGlobalDecl {
  properties: Record<string, StaticJsObjectPropertyDescriptor>;
  extensible?: boolean;
}
export interface StaticJsRealmGlobalValue {
  value: unknown;
}

export interface StaticJsRealmOptions {
  globalThis?: { value: unknown };
  globalObject?: StaticJsRealmGlobalDecl | StaticJsRealmGlobalValue;
}

/**
 * Creates a StaticJsRealm
 * @param opts - Options for creating the realm.
 * @returns The created realm.
 * @public
 */
export default function StaticJsRealm(
  opts: StaticJsRealmOptions = {},
): IStaticJsRealm {
  return new StaticJsEnvRealm(opts);
}
