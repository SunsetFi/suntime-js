import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";

import { nameCompletionLike } from "../name-completion-like.js";
import { isCompletionValue, type CompletionValue } from "../CompletionValue.js";
import { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";

export type NormalCompletion = CompletionValue;

export function NormalCompletion(value: StaticJsValue | null): NormalCompletion {
  return value;
}

NormalCompletion.is = (value: unknown): value is NormalCompletion => {
  return isCompletionValue(value);
};
NormalCompletion.demand = (value: unknown): asserts value is NormalCompletion => {
  if (!NormalCompletion.is(value)) {
    throw new StaticJsEngineError(
      `Expected a normal completion, but got ${nameCompletionLike(value)}.`,
    );
  }
};
