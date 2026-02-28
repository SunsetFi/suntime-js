import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import call from "../algorithms/call.js";
import getMethod from "../algorithms/get-method.js";

import type { IteratorRecord } from "./IteratorRecord.js";
import rethrowCompletion from "../../evaluator/completions/rethrow-completion.js";

export default function iteratorClose(
  iteratorRecord: IteratorRecord,
  completion: Completion,
  realm: StaticJsRealm,
  unwrap?: true,
): EvaluationGenerator<Completion.Normal>;
export default function iteratorClose(
  iteratorRecord: IteratorRecord,
  completion: Completion,
  realm: StaticJsRealm,
  unwrap: false,
): EvaluationGenerator<Completion>;
export default function* iteratorClose(
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
      realm.types.error(
        "TypeError",
        "iterator.return() did not return an object",
      ),
    );
  }

  return unwrap ? rethrowCompletion(completion) : completion;
}

iteratorClose.handle = function* handleIteratorClose<T>(
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
      yield* iteratorClose(iteratorRecord, e, realm);
    }
    throw e;
  }
};
