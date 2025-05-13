import { StaticJsValue } from "../../runtime/index.js";

import { CompletionBase } from "./CompletionBase.js";

export interface NormalCompletion extends CompletionBase {
  type: "normal";
  value: StaticJsValue | null;
}
export function NormalCompletion(
  value: StaticJsValue | null = null,
): NormalCompletion {
  return {
    type: "normal",
    value,
  };
}
