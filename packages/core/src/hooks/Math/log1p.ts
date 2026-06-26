import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathLog1pHook = (this: undefined, realm: StaticJsRealm, value: number) => number;
export const mathLog1pHookDefault: MathLog1pHook = (_realm, value) => {
  return Math.log1p(value);
};
