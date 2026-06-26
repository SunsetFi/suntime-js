import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathAtanHook = (this: undefined, realm: StaticJsRealm, value: number) => number;
export const mathAtanHookDefault: MathAtanHook = (_realm, value) => {
  return Math.atan(value);
};
