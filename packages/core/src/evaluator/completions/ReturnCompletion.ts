import { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { CompletionBase } from "./CompletionBase.js";

export interface ReturnCompletion extends CompletionBase {
  type: "return";
  value: StaticJsValue;
}
export function ReturnCompletion(value: StaticJsValue): ReturnCompletion {
  return {
    type: "return",
    value,
  };
}
