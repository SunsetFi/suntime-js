import { StaticJsValue } from "../../runtime/types/interfaces/StaticJsValue.js";
import StaticJsRuntimeError from "../StaticJsRuntimeError.js";

import { CompletionBase } from "./CompletionBase.js";

export interface ThrowCompletion extends CompletionBase {
  type: "throw";
  value: StaticJsValue;
}
export function ThrowCompletion(value: StaticJsValue): ThrowCompletion {
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

export function catchThrowCompletion<TReturn>(
  func: () => TReturn
): TReturn | ThrowCompletion {
  try {
    return func();
  } catch (error) {
    if (error instanceof StaticJsRuntimeError)
      return ThrowCompletion(error.thrown);
    throw error;
  }
}
