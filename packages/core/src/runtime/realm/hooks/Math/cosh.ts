import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathCoshHook = (realm: StaticJsRealm, value: number) => number;
export const mathCoshHookDefault: MathCoshHook = (_realm, value) => {
  return Math.cosh(value);
};
