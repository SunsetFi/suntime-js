import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathAtanhHook = (realm: StaticJsRealm, value: number) => number;
export const mathAtanhHookDefault: MathAtanhHook = (_realm, value) => {
  return Math.atanh(value);
};
