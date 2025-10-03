import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsFunction } from "../types/StaticJsFunction.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export default function* ordinaryHasInstance(
  C: StaticJsValue,
  O: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<boolean> {
  if (!isStaticJsFunction(C) || !isStaticJsObjectLike(O)) {
    return false;
  }

  const P = yield* C.getPropertyEvaluator("prototype");
  if (!isStaticJsObjectLike(P)) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Function has non-object prototype"),
    );
  }

  // TODO: Symbol nonsense.

  let current = O.prototype;

  while (current !== null) {
    if (current === P) {
      return true;
    }
    current = current.prototype;
  }

  return false;
}
