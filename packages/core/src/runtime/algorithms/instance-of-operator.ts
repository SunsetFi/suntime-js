import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsFunction } from "../types/StaticJsFunction.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";

import toBoolean from "./to-boolean.js";
import ordinaryHasInstance from "./ordinary-has-instance.js";

export default function* instanceOfOperator(
  V: StaticJsValue,
  target: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<boolean> {
  if (!isStaticJsObjectLike(target)) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Right-hand side of 'instanceof' is not an object"),
    );
  }

  const instOfHandler = yield* target.getEvaluator(realm.types.symbols.hasInstance);
  if (isStaticJsFunction(instOfHandler)) {
    const result = yield* instOfHandler.callEvaluator(target, [V]);
    return yield* toBoolean.js(result, realm);
  } else if (!isStaticJsUndefined(instOfHandler)) {
    throw realm.types.error("TypeError", "Symbol.hasInstance is not a function");
  }

  if (!isStaticJsFunction(target)) {
    throw realm.types.error("TypeError", "Right-hand side of 'instanceof' is not callable");
  }

  return yield* ordinaryHasInstance(target, V, realm);
}
