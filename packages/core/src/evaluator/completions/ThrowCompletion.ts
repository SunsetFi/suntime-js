import { StaticJsValue } from "../../runtime/index.js";

import CompletionBase from "./CompletionBase.js";

interface ThrowCompletion extends CompletionBase {
  type: "throw";
  value: StaticJsValue;
}
function ThrowCompletion(value: StaticJsValue): ThrowCompletion {
  return {
    type: "throw",
    value,
  };
}
export default ThrowCompletion;
