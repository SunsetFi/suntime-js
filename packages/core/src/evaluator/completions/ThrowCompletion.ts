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

export function isThrowCompletion(value: unknown): value is ThrowCompletion {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as CompletionBase).type === "throw"
  );
}

export default ThrowCompletion;
