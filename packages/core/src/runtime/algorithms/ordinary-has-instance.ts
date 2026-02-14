import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import {
  isStaticJsBoundFunction,
  isStaticJsFunction,
} from "../types/StaticJsFunction.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import toBoolean from "./to-boolean.js";
import instanceOfOperator from "./instance-of-operator.js";

export default function* ordinaryHasInstance(
  C: StaticJsValue,
  O: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<boolean> {
  if (!isStaticJsFunction(C)) {
    return false;
  }

  if (isStaticJsBoundFunction(C)) {
    const BC = C.boundTargetFunction;
    return yield* instanceOfOperator(O, BC, realm);
  }

  const hasInstanceFunc = yield* C.getEvaluator(
    realm.types.symbols.hasInstance,
  );
  if (isStaticJsFunction(hasInstanceFunc)) {
    const result = yield* hasInstanceFunc.callEvaluator(C, [O]);
    return yield* toBoolean.js(result, realm);
  }

  if (!isStaticJsObjectLike(O)) {
    return false;
  }

  const P = yield* C.getEvaluator("prototype");
  if (!isStaticJsObjectLike(P)) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Function has non-object prototype"),
    );
  }

  let current = O.prototype;

  while (current !== null) {
    if (current === P) {
      return true;
    }
    current = current.prototype;
  }

  return false;
}
