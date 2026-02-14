import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";

import type { IteratorRecord } from "./IteratorRecord.js";
import iteratorStep from "./iterator-step.js";
import iteratorValue from "./iterator-value.js";

export default function* iteratorStepValue(
  iteratorRecord: IteratorRecord,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsValue | null> {
  const result = yield* iteratorStep(iteratorRecord, realm);
  if (!result) {
    return null;
  }

  try {
    return yield* iteratorValue(result);
  } catch (e) {
    if (e instanceof ThrowCompletion) {
      iteratorRecord.done = true;
    }

    throw e;
  }
}
