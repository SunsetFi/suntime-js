import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { isCallable } from "./is-callable.js";

export function* call(
  F: StaticJsValue,
  V: StaticJsValue,
  args: StaticJsValue[] = [],
): EvaluationGenerator<StaticJsValue> {
  if (!isCallable(F)) {
    throw yield* Completion.Throw.create("TypeError", "Called object is not a function");
  }

  return yield* F.callEvaluator(V, args);
}
