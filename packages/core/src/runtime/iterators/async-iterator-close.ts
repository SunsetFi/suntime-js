import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { Completion } from "../../evaluator/completions/Completion.js";
import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";
import rethrowCompletion from "../../evaluator/completions/rethrow-completion.js";
import { isAbruptCompletion } from "../../evaluator/completions/AbruptCompletion.js";
import type { NormalCompletion } from "../../evaluator/completions/NormalCompletion.js";

import { AwaitCommand } from "../../evaluator/commands/AwaitCommand.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import call from "../algorithms/call.js";

import type { IteratorRecord } from "./IteratorRecord.js";

export default function asyncIteratorClose(
  iteratorRecord: IteratorRecord,
  completion: Completion,
  realm: StaticJsRealm,
  unwrap?: true,
): EvaluationGenerator<NormalCompletion>;
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
    const returnMethod = yield* iterator.getEvaluator("return");
    innerResult = yield* call(returnMethod, iterator, [], realm);
    innerResult = yield* AwaitCommand(innerResult);
  } catch (e) {
    if (isAbruptCompletion(e)) {
      innerResult = e;
    } else {
      throw e;
    }
  }

  if (completion instanceof ThrowCompletion) {
    return unwrap ? rethrowCompletion(completion) : completion;
  }

  if (innerResult instanceof ThrowCompletion) {
    return unwrap ? rethrowCompletion(innerResult) : innerResult;
  }

  // TODO: Spec says if this is a normal completion that's not an object, we should throw a TypeError
  // But that doesn't make sense as other sources say iterator.return() has no return value
  // I must be misunderstanding something.

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
    if (isAbruptCompletion(e)) {
      // If the handler threw an abnormal completion, we need to close the iterator
      yield* asyncIteratorClose(iteratorRecord, e, realm);
    }
    throw e;
  }
};
