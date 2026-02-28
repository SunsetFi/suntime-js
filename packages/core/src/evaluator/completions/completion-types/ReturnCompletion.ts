import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";

import nameCompletionLike from "../name-completion-like.js";

export interface ReturnCompletion {
  readonly type: "return";
  readonly value: StaticJsValue;
}

export function ReturnCompletion(value: StaticJsValue): ReturnCompletion {
  return {
    type: "return",
    value,
  };
}

ReturnCompletion.is = function isReturnCompletion(value: unknown): value is ReturnCompletion {
  return value != null && typeof value === "object" && "type" in value && value.type === "return";
};

ReturnCompletion.assert = function (value: unknown): asserts value is ReturnCompletion {
  if (!ReturnCompletion.is(value)) {
    throw new StaticJsEngineError(
      `Expected a return completion, but got ${nameCompletionLike(value)}.`,
    );
  }
};
