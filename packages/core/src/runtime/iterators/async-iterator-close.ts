import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

import { AwaitCommand } from "../../evaluator/commands/AwaitCommand.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import { rethrowCompletion } from "../../evaluator/completions/rethrow-completion.js";
import call from "../algorithms/call.js";
import getMethod from "../algorithms/get-method.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";

export function asyncIteratorClose(
  iteratorRecord: StaticJsIteratorRecord,
  completion: Completion,
  unwrap?: true,
): EvaluationGenerator<Completion.Normal>;
export function asyncIteratorClose(
  iteratorRecord: StaticJsIteratorRecord,
  completion: Completion,
  unwrap: false,
): EvaluationGenerator<Completion>;
export function* asyncIteratorClose(
  iteratorRecord: StaticJsIteratorRecord,
  completion: Completion,
  unwrap: boolean = true,
): EvaluationGenerator<Completion> {
  const iterator = iteratorRecord.iterator;
  let innerResult: Completion;
  try {
    innerResult = yield* getMethod(iterator, "return");
    if (!innerResult) {
      return completion;
    }

    innerResult = yield* call(innerResult, iterator, []);
    innerResult = yield* AwaitCommand(innerResult);
  } catch (e) {
    if (Completion.Abrupt.is(e)) {
      innerResult = e;
    } else {
      throw e;
    }
  }

  if (Completion.Throw.is(completion)) {
    return unwrap ? rethrowCompletion(completion) : completion;
  }

  if (Completion.Throw.is(innerResult)) {
    return unwrap ? rethrowCompletion(innerResult) : innerResult;
  }

  if (!isStaticJsObject(innerResult)) {
    throw Completion.Throw("TypeError", "iterator.return() did not return an object");
  }

  return unwrap ? rethrowCompletion(completion) : completion;
}

asyncIteratorClose.handle = function* handleIteratorClose<T>(
  iteratorRecord: StaticJsIteratorRecord,
  handler: () => EvaluationGenerator<T>,
): EvaluationGenerator<T> {
  try {
    const result = yield* handler();
    return result;
  } catch (e) {
    if (Completion.Abrupt.is(e)) {
      // If the handler threw an abnormal completion, we need to close the iterator
      yield* asyncIteratorClose(iteratorRecord, e);
    }
    throw e;
  }
};
