import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathSqrtHook = (realm: StaticJsRealm, value: number) => number;
export const mathSqrtHookDefault: MathSqrtHook = (_realm, value) => {
  return Math.sqrt(value);
};
