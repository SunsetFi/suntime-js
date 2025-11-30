import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { Completion } from "../../evaluator/completions/Completion.js";
import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";
import { unwrapCompletion } from "../../evaluator/completions/unwrapCompletion.js";
import { isAbnormalCompletion } from "../../evaluator/completions/AbnormalCompletion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsFunction } from "../types/StaticJsFunction.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";

export default function* iteratorClose(
  iterator: StaticJsObjectLike,
  completion: Completion,
  realm: StaticJsRealm,
  unwrap: boolean = true,
): EvaluationGenerator<Completion> {
  const returnMethod = yield* iterator.getPropertyEvaluator("return");

  let innerResult: Completion;
  if (isStaticJsNull(returnMethod) || isStaticJsUndefined(returnMethod)) {
    return unwrap ? unwrapCompletion(completion) : completion;
  } else if (!isStaticJsFunction(returnMethod)) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "'return' is not a function"),
    );
  } else {
    try {
      innerResult = yield* returnMethod.callEvaluator(iterator);
    } catch (e) {
      if (isAbnormalCompletion(e)) {
        // Store it, because
        innerResult = e;
      }

      throw e;
    }
  }

  if (completion instanceof ThrowCompletion) {
    return unwrap ? unwrapCompletion(completion) : completion;
  }

  if (innerResult instanceof ThrowCompletion) {
    return unwrap ? unwrapCompletion(innerResult) : innerResult;
  }

  // TODO: Spec says if this is a normal completion that's not an object, we should throw a TypeError
  // But that doesn't make sense as other sources say iterator.return() has no return value
  // I must be misunderstanding something.

  return unwrap ? unwrapCompletion(completion) : completion;
}

iteratorClose.handle = function* handleIteratorClose<T>(
  iterator: StaticJsObjectLike,
  realm: StaticJsRealm,
  handler: () => EvaluationGenerator<T>,
): EvaluationGenerator<T> {
  try {
    const result = yield* handler();
    return result;
  } catch (e) {
    if (isAbnormalCompletion(e)) {
      // If the handler threw an abnormal completion, we need to close the iterator
      yield* iteratorClose(iterator, e, realm);
    }
    throw e;
  }
};
