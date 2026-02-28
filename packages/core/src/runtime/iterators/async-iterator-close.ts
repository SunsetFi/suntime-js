import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../evaluator/completions/Completion.js";
import rethrowCompletion from "../../evaluator/completions/rethrow-completion.js";

import { AwaitCommand } from "../../evaluator/commands/AwaitCommand.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import call from "../algorithms/call.js";
import getMethod from "../algorithms/get-method.js";

import type { IteratorRecord } from "./IteratorRecord.js";

export default function asyncIteratorClose(
  iteratorRecord: IteratorRecord,
  completion: Completion,
  realm: StaticJsRealm,
  unwrap?: true,
): EvaluationGenerator<Completion.Normal>;
export default function asyncIteratorClose(
  iteratorRecord: IteratorRecord,
  completion: Completion,
  realm: StaticJsRealm,
  unwrap: false,
): EvaluationGenerator<Completion>;
export default function* asyncIteratorClose(
  iteratorRecord: IteratorRecord,
  completion: Completion,
  realm: StaticJsRealm,
  unwrap: boolean = true,
): EvaluationGenerator<Completion> {
  const iterator = iteratorRecord.iterator;
  let innerResult: Completion;
  try {
    innerResult = yield* getMethod(iterator, "return", realm);
    if (!innerResult) {
      return completion;
    }

    innerResult = yield* call(innerResult, iterator, [], realm);
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

  if (!isStaticJsObjectLike(innerResult)) {
    throw Completion.Throw(
      realm.types.error("TypeError", "iterator.return() did not return an object"),
    );
  }

  return unwrap ? rethrowCompletion(completion) : completion;
}

asyncIteratorClose.handle = function* handleIteratorClose<T>(
  iteratorRecord: IteratorRecord,
  realm: StaticJsRealm,
  handler: () => EvaluationGenerator<T>,
): EvaluationGenerator<T> {
  try {
    const result = yield* handler();
    return result;
  } catch (e) {
    if (Completion.Abrupt.is(e)) {
      // If the handler threw an abnormal completion, we need to close the iterator
      yield* asyncIteratorClose(iteratorRecord, e, realm);
    }
    throw e;
  }
};
