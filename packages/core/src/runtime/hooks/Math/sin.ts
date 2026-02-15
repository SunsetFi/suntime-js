import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathSinHook = (realm: StaticJsRealm, value: number) => number;
export const mathSinHookDefault: MathSinHook = (_realm, value) => {
  return Math.sin(value);
};
