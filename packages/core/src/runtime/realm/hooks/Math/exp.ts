import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathExpHook = (realm: StaticJsRealm, value: number) => number;
export const mathExpHookDefault: MathExpHook = (_realm, value) => {
  return Math.exp(value);
};
