import { StaticJsValue } from "../../runtime/index.js";

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
