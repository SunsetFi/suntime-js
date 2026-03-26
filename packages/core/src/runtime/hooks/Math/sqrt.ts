import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathSqrtHook = (this: undefined, realm: StaticJsRealm, value: number) => number;
export const mathSqrtHookDefault: MathSqrtHook = (_realm, value) => {
  return Math.sqrt(value);
};
