import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";
import type { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";

import type { CompletionValue } from "../CompletionValue.js";

import nameCompletionLike from "../name-completion-like.js";

export interface ContinueCompletion {
  readonly type: "continue";
  readonly target: string | null;
  readonly value: CompletionValue;
}

export function ContinueCompletion(
  target: string | null = null,
  value: StaticJsValue | null = null,
): ContinueCompletion {
  return {
    type: "continue",
    target,
    value,
  };
}

ContinueCompletion.is = function isContinueCompletion(
  value: unknown,
): value is ContinueCompletion {
  return (
    value != null &&
    typeof value === "object" &&
    "type" in value &&
    value.type === "continue"
  );
};

ContinueCompletion.assert = function (
  value: unknown,
): asserts value is ContinueCompletion {
  if (!ContinueCompletion.is(value)) {
    throw new StaticJsEngineError(
      `Expected a continue completion, but got ${nameCompletionLike(value)}.`,
    );
  }
};

ContinueCompletion.isContinueForLabel = function (
  e: unknown,
  label: string | null,
): e is ContinueCompletion {
  if (!ContinueCompletion.is(e)) {
    return false;
  }
  return e.target === null || e.target === label;
};
