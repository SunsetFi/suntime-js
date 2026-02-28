import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import nameCompletionLike from "../name-completion-like.js";
import { isCompletionValue, type CompletionValue } from "../CompletionValue.js";

export type NormalCompletion = CompletionValue;

export const NormalCompletion = {
  is(value: unknown): value is NormalCompletion {
    return isCompletionValue(value);
  },
  demand(value: unknown): asserts value is NormalCompletion {
    if (!NormalCompletion.is(value)) {
      throw new StaticJsEngineError(
        `Expected a normal completion, but got ${nameCompletionLike(value)}.`,
      );
    }
  },
};
