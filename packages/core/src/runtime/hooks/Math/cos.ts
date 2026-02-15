import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathCosHook = (realm: StaticJsRealm, value: number) => number;
export const mathCosHookDefault: MathCosHook = (_realm, value) => {
  return Math.cos(value);
};
