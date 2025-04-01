import { StaticJsObjectPropertyDescriptor } from "../../types/index.js";

import StaticJsRealmImpl from "../implementation/StaticJsRealmImpl.js";
import { StaticJsRealm as IStaticJsRealm } from "../interfaces/index.js";

export interface StaticJsRealmGlobalDecl {
  properties: Record<string, StaticJsObjectPropertyDescriptor>;
  extensible?: boolean;
}
export interface StaticJsRealmGlobalValue {
  value: object;
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
  return new StaticJsRealmImpl(opts);
}
