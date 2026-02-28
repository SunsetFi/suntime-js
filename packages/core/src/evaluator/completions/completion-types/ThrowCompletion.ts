import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";
import StaticJsRuntimeError from "../../../errors/StaticJsRuntimeError.js";

import { type StaticJsValue } from "../../../runtime/types/StaticJsValue.js";

import nameCompletionLike from "../name-completion-like.js";

export interface ThrowCompletion {
  readonly type: "throw";
  readonly value: StaticJsValue;
}

export function ThrowCompletion(value: StaticJsValue): ThrowCompletion {
  return {
    type: "throw",
    value,
  };
}

ThrowCompletion.is = function isThrowCompletion(
  value: unknown,
): value is ThrowCompletion {
  return (
    value != null &&
    typeof value === "object" &&
    "type" in value &&
    value.type === "throw"
  );
};

ThrowCompletion.assert = function (
  value: unknown,
): asserts value is ThrowCompletion {
  if (!ThrowCompletion.is(value)) {
    throw new StaticJsEngineError(
      `Expected a throw completion, but got ${nameCompletionLike(value)}.`,
    );
  }
};

ThrowCompletion.handleRuntime = function (value: unknown) {
  if (ThrowCompletion.is(value)) {
    throw new StaticJsRuntimeError(value.value);
  }
};

ThrowCompletion.toRuntime = function (completion: ThrowCompletion): never {
  throw new StaticJsRuntimeError(completion.value);
};
