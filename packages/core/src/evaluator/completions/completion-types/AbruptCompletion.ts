import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import nameCompletionLike from "../name-completion-like.js";

import { BreakCompletion } from "./BreakCompletion.js";
import { ContinueCompletion } from "./ContinueCompletion.js";
import { ReturnCompletion } from "./ReturnCompletion.js";
import { ThrowCompletion } from "./ThrowCompletion.js";

export type AbruptCompletion =
  | BreakCompletion
  | ContinueCompletion
  | ReturnCompletion
  | ThrowCompletion;

export const AbruptCompletion = {
  is(value: unknown): value is AbruptCompletion {
    return (
      BreakCompletion.is(value) ||
      ContinueCompletion.is(value) ||
      ReturnCompletion.is(value) ||
      ThrowCompletion.is(value)
    );
  },
  assert(value: unknown): asserts value is AbruptCompletion {
    if (!AbruptCompletion.is(value)) {
      throw new StaticJsEngineError(
        `Expected an abrupt completion, but got ${nameCompletionLike(value)}.`,
      );
    }
  },
};
