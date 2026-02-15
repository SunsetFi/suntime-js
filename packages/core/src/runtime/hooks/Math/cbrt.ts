import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathCbrtHook = (realm: StaticJsRealm, value: number) => number;
export const mathCbrtHookDefault: MathCbrtHook = (_realm, value) => {
  return Math.cbrt(value);
};
