import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathRandomHook = (realm: StaticJsRealm) => number;
export const mathRandomHookDefault: MathRandomHook = (_realm) => {
  return Math.random();
};
