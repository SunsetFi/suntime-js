import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathAcoshHook = (this: undefined, realm: StaticJsRealm, value: number) => number;
export const mathAcoshHookDefault: MathAcoshHook = (_realm, value) => {
  return Math.acosh(value);
};
