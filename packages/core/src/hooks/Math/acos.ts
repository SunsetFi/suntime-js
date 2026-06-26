import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathAcosHook = (this: undefined, realm: StaticJsRealm, value: number) => number;
export const mathAcosHookDefault: MathAcosHook = (_realm, value) => {
  return Math.acos(value);
};
