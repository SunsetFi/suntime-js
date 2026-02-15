import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathLog10Hook = (realm: StaticJsRealm, value: number) => number;
export const mathLog10HookDefault: MathLog10Hook = (_realm, value) => {
  return Math.log10(value);
};
