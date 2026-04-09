import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsBoundFunction } from "../types/StaticJsFunction.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import toBoolean from "./to-boolean.js";
import instanceOfOperator from "./instance-of-operator.js";
import { get } from "./get.js";
import call from "./call.js";
import { isCallable } from "./is-callable.js";

export default function* ordinaryHasInstance(
  C: StaticJsValue,
  O: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<boolean> {
  if (!isCallable(C)) {
    return false;
  }

  if (isStaticJsBoundFunction(C)) {
    const BC = C.boundTargetFunction;
    return yield* instanceOfOperator(O, BC, realm);
  }

  const hasInstanceFunc = yield* get(C, realm.types.symbols.hasInstance);
  if (isCallable(hasInstanceFunc)) {
    const result = yield* call(hasInstanceFunc, C, [O]);
    return yield* toBoolean.js(result);
  }

  if (!isStaticJsObjectLike(O)) {
    return false;
  }

  const P = yield* get(C, "prototype");
  if (!isStaticJsObjectLike(P)) {
    throw Completion.Throw("TypeError", "Function has non-object prototype");
  }

  let current = yield* O.getPrototypeOfEvaluator();

  while (current !== null) {
    if (current === P) {
      return true;
    }
    current = yield* current.getPrototypeOfEvaluator();
  }

  return false;
}
