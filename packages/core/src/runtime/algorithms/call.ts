import { Completion } from "../../evaluator/completions/Completion.js";
import EvaluationContext from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { isStaticJsFunction } from "../types/StaticJsFunction.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";

export default function* call(
  F: StaticJsValue,
  V: StaticJsValue,
  args: StaticJsValue[],
): EvaluationGenerator<StaticJsValue> {
  if (!isStaticJsFunction(F)) {
    const { realm } = EvaluationContext.current;
    throw Completion.Throw(realm.types.error("TypeError", "Called object is not a function"));
  }

  return yield* F.callEvaluator(V, args);
}
