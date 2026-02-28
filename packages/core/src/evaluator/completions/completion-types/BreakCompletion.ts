import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";
import type { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";

import type { CompletionValue } from "../CompletionValue.js";

import nameCompletionLike from "../name-completion-like.js";

export interface BreakCompletion {
  readonly type: "break";
  readonly target: string | null;
  readonly value: CompletionValue;
}

export function BreakCompletion(
  target: string | null = null,
  value: StaticJsValue | null = null,
): BreakCompletion {
  return {
    type: "break",
    target,
    value,
  };
}

BreakCompletion.is = function isBreakCompletion(value: unknown): value is BreakCompletion {
  return value != null && typeof value === "object" && "type" in value && value.type === "break";
};

BreakCompletion.assert = function (value: unknown): asserts value is BreakCompletion {
  if (!BreakCompletion.is(value)) {
    throw new StaticJsEngineError(
      `Expected a break completion, but got ${nameCompletionLike(value)}.`,
    );
  }
};

BreakCompletion.isBreakForLabel = function (
  e: unknown,
  label: string | null,
): e is BreakCompletion {
  if (!BreakCompletion.is(e)) {
    return false;
  }
  return e.target === null || e.target === label;
};
