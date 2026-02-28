import StaticJsEngineError from "../../errors/StaticJsEngineError.js";
import { isStaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";
import { isStaticJsValue } from "../../runtime/types/StaticJsValue.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { Completion } from "./Completion.js";
import captureThrownCompletion from "./capture-thrown-completion.js";
import nameCompletionLike from "./name-completion-like.js";

export default function* X<T extends object | null = Completion.Normal>(
  value:
    | EvaluationGenerator<T | Completion.Abrupt>
    | (() => EvaluationGenerator<T | Completion.Abrupt>),
): EvaluationGenerator<T> {
  const completion = yield* captureThrownCompletion<T>(value);

  if (!Completion.Normal.is(completion)) {
    throw new StaticJsEngineError(
      `Expected a normal completion, but got ${nameCompletionLike(completion)}.`,
    );
  }

  return completion;
}

X.ref = function xRef(
  value:
    | EvaluationGenerator<Completion>
    | (() => EvaluationGenerator<Completion>),
) {
  const completion = captureThrownCompletion(value);
  if (!isStaticJsReferenceRecord(completion)) {
    throw new StaticJsEngineError(
      `Expected a reference record, but got ${nameCompletionLike(completion)}.`,
    );
  }
};

X.value = function xValue(
  value:
    | EvaluationGenerator<Completion>
    | (() => EvaluationGenerator<Completion>),
) {
  const completion = captureThrownCompletion(value);

  if (!isStaticJsValue(completion)) {
    throw new StaticJsEngineError(
      `Expected a value, but got ${nameCompletionLike(completion)}.`,
    );
  }

  return completion;
};
