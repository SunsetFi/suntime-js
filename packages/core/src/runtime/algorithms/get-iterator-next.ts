import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";
import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsFunction } from "../types/StaticJsFunction.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import {
  type StaticJsObjectLike,
  isStaticJsObjectLike,
} from "../types/StaticJsObjectLike.js";

import toBoolean from "./to-boolean.js";

export default function* getIteratorNext(
  iterator: StaticJsObjectLike,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsValue | false> {
  const nextMethod = yield* iterator.getPropertyEvaluator("next");
  if (!isStaticJsFunction(nextMethod)) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "next is not a function"),
    );
  }

  const next = yield* nextMethod.callEvaluator(iterator);
  if (!isStaticJsObjectLike(next)) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Result of next is not an object"),
    );
  }

  const done = yield* next.getPropertyEvaluator("done");
  const doneResult = yield* toBoolean(done, realm);
  if (doneResult.value) {
    return false;
  }

  const value = yield* next.getPropertyEvaluator("value");
  return value;
}
