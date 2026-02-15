import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathAsinHook = (realm: StaticJsRealm, value: number) => number;
export const mathAsinHookDefault: MathAsinHook = (_realm, value) => {
  return Math.asin(value);
};
