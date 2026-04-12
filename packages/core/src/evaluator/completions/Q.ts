import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import getValue from "../../runtime/algorithms/get-value.js";

import { isStaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { Completion } from "./Completion.js";
import type { CompletionEvaluator } from "./CompletionEvaluator.js";
import type { CompletionValue } from "./CompletionValue.js";

import { captureThrownCompletion } from "./capture-thrown-completion.js";
import { nameCompletionLike } from "./name-completion-like.js";

export function Q<T>(
  value: CompletionEvaluator<T>,
): EvaluationGenerator<[T] extends [Completion.Abrupt] ? never : Exclude<T, Completion.Abrupt>>;
export function Q(value: CompletionEvaluator<Completion>): EvaluationGenerator<CompletionValue>;
export function* Q(value: CompletionEvaluator): EvaluationGenerator {
  if (Completion.Throw.is(value)) {
    throw value;
  }

  if (Completion.Normal.is(value)) {
    return value;
  }

  const completion = yield* captureThrownCompletion(value);

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

Q.val = function* qValue(evaluator: CompletionEvaluator<Completion>) {
  const completion = yield* Q(evaluator);
  if (!completion) {
    throw new StaticJsEngineError(
      `Expected a completion value, but got ${nameCompletionLike(completion)}.`,
    );
  }

  return yield* getValue(completion);
};
