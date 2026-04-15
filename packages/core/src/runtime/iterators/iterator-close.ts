import { Completion } from "../../evaluator/completions/Completion.js";
import { rethrowCompletion } from "../../evaluator/completions/rethrow-completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { call } from "../algorithms/call.js";
import { getMethod } from "../algorithms/get-method.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";

import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export function iteratorClose(
  iteratorRecord: StaticJsIteratorRecord,
  value: Completion.Abrupt,
  unwrap?: true,
): EvaluationGenerator<never>;
export function iteratorClose<T extends Completion>(
  iteratorRecord: StaticJsIteratorRecord,
  value: T,
  unwrap?: true,
): EvaluationGenerator<T>;
export function iteratorClose(
  iteratorRecord: StaticJsIteratorRecord,
  value: Completion,
  unwrap: false,
): EvaluationGenerator<Completion>;
export function* iteratorClose(
  iteratorRecord: StaticJsIteratorRecord,
  value: Completion,
  unwrap: boolean = true,
): EvaluationGenerator<Completion> {
  const iterator = iteratorRecord.iterator;
  let innerResult: Completion;
  try {
    innerResult = yield* getMethod(iterator, "return");
    if (!innerResult) {
      return value;
    }

    innerResult = yield* call(innerResult, iterator, []);
  } catch (e) {
    if (Completion.Abrupt.is(e)) {
      innerResult = e;
    } else {
      throw e;
    }
  }

  if (Completion.Throw.is(value)) {
    return unwrap ? rethrowCompletion(value) : value;
  }

  if (Completion.Throw.is(innerResult)) {
    return unwrap ? rethrowCompletion(innerResult) : innerResult;
  }

  if (!isStaticJsObject(innerResult)) {
    throw Completion.Throw("TypeError", "iterator.return() did not return an object");
  }

  return unwrap ? rethrowCompletion(value) : value;
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
      yield* iteratorClose(iteratorRecord, e);
    }
    throw e;
  }
};
