import StaticJsEngineError from "../../errors/StaticJsEngineError.js";
import getValue from "../../runtime/algorithms/get-value.js";
import type { StaticJsRealm } from "../../runtime/index.js";

import { isStaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { Completion } from "./Completion.js";
import type { CompletionEvaluator } from "./CompletionEvaluator.js";
import type { CompletionValue } from "./CompletionValue.js";

import captureThrownCompletion from "./capture-thrown-completion.js";
import nameCompletionLike from "./name-completion-like.js";

export default function Q<T extends object | null>(
  evaluator: CompletionEvaluator<T>,
): EvaluationGenerator<Exclude<T, Completion.Abrupt>>;
export default function Q(
  evaluator: CompletionEvaluator<Completion>,
): EvaluationGenerator<CompletionValue>;
export default function* Q(
  evaluator: CompletionEvaluator<object | null>,
): EvaluationGenerator<object | null> {
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

Q.val = function* qValue(evaluator: CompletionEvaluator<Completion>, realm: StaticJsRealm) {
  const completion = yield* Q(evaluator);
  if (!completion) {
    throw new StaticJsEngineError(
      `Expected a completion value, but got ${nameCompletionLike(completion)}.`,
    );
  }

  return yield* getValue(completion, realm);
};
