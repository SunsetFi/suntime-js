import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathAcoshHook = (realm: StaticJsRealm, value: number) => number;
export const mathAcoshHookDefault: MathAcoshHook = (_realm, value) => {
  return Math.acosh(value);
};
