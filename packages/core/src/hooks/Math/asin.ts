import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathAsinHook = (this: undefined, realm: StaticJsRealm, value: number) => number;
export const mathAsinHookDefault: MathAsinHook = (_realm, value) => {
  return Math.asin(value);
};
