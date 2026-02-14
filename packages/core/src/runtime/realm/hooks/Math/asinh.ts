import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathAsinhHook = (realm: StaticJsRealm, value: number) => number;
export const mathAsinhHookDefault: MathAsinhHook = (_realm, value) => {
  return Math.asinh(value);
};
