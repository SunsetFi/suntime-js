import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export type MathTanhHook = (this: undefined, realm: StaticJsRealm, value: number) => number;
export const mathTanhHookDefault: MathTanhHook = (_realm, value) => {
  return Math.tanh(value);
};
