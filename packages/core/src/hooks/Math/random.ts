import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathRandomHook = (this: undefined, realm: StaticJsRealm) => number;
export const mathRandomHookDefault: MathRandomHook = (_realm) => {
  return Math.random();
};
