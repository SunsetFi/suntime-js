import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathLog1pHook = (realm: StaticJsRealm, value: number) => number;
export const mathLog1pHookDefault: MathLog1pHook = (_realm, value) => {
  return Math.log1p(value);
};
