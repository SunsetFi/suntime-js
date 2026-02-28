import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import nameCompletionLike from "../name-completion-like.js";
import { BreakCompletion } from "./BreakCompletion.js";
import { ContinueCompletion } from "./ContinueCompletion.js";
import { ReturnCompletion } from "./ReturnCompletion.js";

export type ControlFlowCompletion = BreakCompletion | ContinueCompletion | ReturnCompletion;

export const ControlFlowCompletion = {
  is(value: unknown): value is ControlFlowCompletion {
    return BreakCompletion.is(value) || ContinueCompletion.is(value) || ReturnCompletion.is(value);
  },
  assert(value: unknown): asserts value is ControlFlowCompletion {
    if (!ControlFlowCompletion.is(value)) {
      throw new StaticJsEngineError(
        `Expected a control flow completion, but got ${nameCompletionLike(value)}.`,
      );
    }
  },
  handleRuntime(value: unknown): void {
    if (ControlFlowCompletion.is(value)) {
      throw new StaticJsEngineError(`Unexpected control flow completion of type ${value.type}.`);
    }
  },
};
