import { type MathHooks, mathDefaultHooks } from "./Math/index.js";

export interface RealmHooks {
  math: MathHooks;
}

export const realmDefaultHooks = {
  math: mathDefaultHooks,
};
