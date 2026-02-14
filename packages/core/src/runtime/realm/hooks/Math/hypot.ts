import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathHypotHook = (
  realm: StaticJsRealm,
  ...values: number[]
) => number;
export const mathHypotHookDefault: MathHypotHook = (_realm, ...values) => {
  return Math.hypot(...values);
};
