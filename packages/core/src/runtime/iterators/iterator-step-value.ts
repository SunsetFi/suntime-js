import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { iteratorStep } from "./iterator-step.js";
import { iteratorValue } from "./iterator-value.js";
import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export function* iteratorStepValue(
  iteratorRecord: StaticJsIteratorRecord,
): EvaluationGenerator<StaticJsValue | null> {
  const result = yield* iteratorStep(iteratorRecord);
  if (!result) {
    return null;
  }

  try {
    return yield* iteratorValue(result);
  } catch (e) {
    if (Completion.Throw.is(e)) {
      iteratorRecord.done = true;
    }

    throw e;
  }
}
