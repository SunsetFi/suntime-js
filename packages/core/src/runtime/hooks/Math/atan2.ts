import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathAtan2Hook = (realm: StaticJsRealm, y: number, x: number) => number;
export const mathAtan2HookDefault: MathAtan2Hook = (_realm, y, x) => {
  return Math.atan2(y, x);
};
