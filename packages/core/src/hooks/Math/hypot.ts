import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathHypotHook = (this: undefined, realm: StaticJsRealm, ...values: number[]) => number;
export const mathHypotHookDefault: MathHypotHook = (_realm, ...values) => {
  return Math.hypot(...values);
};
