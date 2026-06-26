import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathSinhHook = (this: undefined, realm: StaticJsRealm, value: number) => number;
export const mathSinhHookDefault: MathSinhHook = (_realm, value) => {
  return Math.sinh(value);
};
