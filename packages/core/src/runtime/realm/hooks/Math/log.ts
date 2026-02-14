import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathLogHook = (realm: StaticJsRealm, value: number) => number;
export const mathLogHookDefault: MathLogHook = (_realm, value) => {
  return Math.log(value);
};
