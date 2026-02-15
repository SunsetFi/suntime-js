import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathAtanHook = (realm: StaticJsRealm, value: number) => number;
export const mathAtanHookDefault: MathAtanHook = (_realm, value) => {
  return Math.atan(value);
};
