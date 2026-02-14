import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathSinhHook = (realm: StaticJsRealm, value: number) => number;
export const mathSinhHookDefault: MathSinhHook = (_realm, value) => {
  return Math.sinh(value);
};
