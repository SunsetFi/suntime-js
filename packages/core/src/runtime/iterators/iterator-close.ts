import { ThrowCompletion } from "../../evaluator/completions/completion-types/ThrowCompletion.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import { Q } from "../../evaluator/completions/Q.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { call } from "../algorithms/call.js";
import { getMethod } from "../algorithms/get-method.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";

import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export function* iteratorClose<T extends Completion>(
  iteratorRecord: StaticJsIteratorRecord,
  completion: T,
): EvaluationGenerator<T | ThrowCompletion> {
  const iterator = iteratorRecord.iterator;
  let innerResult: Completion;
  try {
    innerResult = yield* getMethod(iterator, "return");
    if (!innerResult) {
      return completion;
    }

    innerResult = yield* call(innerResult, iterator, []);
  } catch (e) {
    if (Completion.Abrupt.is(e)) {
      // Theoretically, this can only ever be a ThrowCompletion.
      innerResult = e;
    } else {
      throw e;
    }
  }

  if (Completion.Throw.is(completion)) {
    return completion;
  }

  if (Completion.Throw.is(innerResult)) {
    return innerResult;
  }

  if (!isStaticJsObject(innerResult)) {
    throw Completion.Throw("TypeError", "iterator.return() did not return an object");
  }

  return completion;
}

iteratorClose.handle = function* handleIteratorClose<T>(
  iteratorRecord: StaticJsIteratorRecord,
  handler: () => EvaluationGenerator<T>,
): EvaluationGenerator<T> {
  try {
    const result = yield* handler();
    return result;
  } catch (e) {
    if (Completion.Abrupt.is(e)) {
      // If the handler threw an abnormal completion, we need to close the iterator
      yield* Q(iteratorClose(iteratorRecord, e));
    }
    throw e;
  }
};
