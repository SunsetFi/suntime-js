import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";
import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsFunction } from "../types/StaticJsFunction.js";
import {
  isStaticJsObjectLike,
  type StaticJsObjectLike,
} from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export default function* getIterator(
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  if (!isStaticJsObjectLike(value)) {
    // NodeJS seems to stringify the value in place of 'Value'.  Maybe.  It returns {} when {} is used?
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Value is not iterable"),
    );
  }

  const iteratorFunc = yield* value.getEvaluator(realm.types.symbols.iterator);
  if (!isStaticJsFunction(iteratorFunc)) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Value is not iterable"),
    );
  }

  const iterator = yield* iteratorFunc.callEvaluator(value);
  if (!isStaticJsObjectLike(iterator)) {
    throw new ThrowCompletion(
      realm.types.error(
        "TypeError",
        "Result of the Symbol.iterator method is not an object",
      ),
    );
  }

  return iterator;
}
