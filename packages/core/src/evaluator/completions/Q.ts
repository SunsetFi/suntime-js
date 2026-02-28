import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";

import { isStaticJsValue } from "../../runtime/types/StaticJsValue.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { Completion } from "./Completion.js";
import type { CompletionEvaluator } from "./CompletionEvaluator.js";

import captureThrownCompletion from "./capture-thrown-completion.js";
import nameCompletionLike from "./name-completion-like.js";

export default function* Q<T extends object | null = Completion.Normal>(
  evaluator: CompletionEvaluator<T>,
): EvaluationGenerator<T> {
  const completion = yield* captureThrownCompletion(evaluator);

  if (Completion.Abrupt.is(completion)) {
    throw completion;
  }

  return completion;
}

Q.ref = function* qRef<T extends object | null = Completion.Normal>(
  evaluator: CompletionEvaluator<T>,
) {
  const completion = yield* Q(evaluator);

  if (!isStaticJsReferenceRecord(completion)) {
    throw new StaticJsEngineError(
      `Expected a reference record, but got ${nameCompletionLike(completion)}.`,
    );
  }

  return completion;
};

Q.value = function* qValue<T extends object | null = Completion.Normal>(
  evaluator: CompletionEvaluator<T>,
) {
  const completion = yield* Q(evaluator);

  if (!isStaticJsValue(completion)) {
    throw new StaticJsEngineError(
      `Expected a value, but got ${nameCompletionLike(completion)}.`,
    );
  }

  return completion;
};
