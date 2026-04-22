import { AwaitCommand } from "../../evaluator/commands/AwaitCommand.js";
import { ThrowCompletion } from "../../evaluator/completions/completion-types/ThrowCompletion.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { call } from "../algorithms/call.js";
import { getMethod } from "../algorithms/get-method.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";

import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export function* asyncIteratorClose<T extends Completion>(
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
    innerResult = yield* AwaitCommand(innerResult);
  } catch (e) {
    if (Completion.Abrupt.is(e)) {
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
