import type { StaticJsRealm } from "../../StaticJsRealm.js";

export type MathExpm1Hook = (realm: StaticJsRealm, value: number) => number;
export const mathExpm1HookDefault: MathExpm1Hook = (_realm, value) => {
  return Math.expm1(value);
};
