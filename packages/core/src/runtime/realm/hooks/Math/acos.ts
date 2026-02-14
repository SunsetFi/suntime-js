import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathAcosHook = (realm: StaticJsRealm, value: number) => number;
export const mathAcosHookDefault: MathAcosHook = (_realm, value) => {
  return Math.acos(value);
};
