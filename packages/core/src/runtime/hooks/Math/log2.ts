import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathLog2Hook = (this: undefined, realm: StaticJsRealm, value: number) => number;
export const mathLog2HookDefault: MathLog2Hook = (_realm, value) => {
  return Math.log2(value);
};
