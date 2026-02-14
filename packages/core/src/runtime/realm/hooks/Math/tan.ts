import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathTanHook = (realm: StaticJsRealm, value: number) => number;
export const mathTanHookDefault: MathTanHook = (_realm, value) => {
  return Math.tan(value);
};
