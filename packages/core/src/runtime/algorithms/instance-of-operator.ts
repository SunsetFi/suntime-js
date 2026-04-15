import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { call } from "./call.js";
import { get } from "./get.js";
import { isCallable } from "./is-callable.js";
import { ordinaryHasInstance } from "./ordinary-has-instance.js";
import { toBoolean } from "./to-boolean.js";

export function* instanceOfOperator(
  V: StaticJsValue,
  target: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<boolean> {
  if (!isStaticJsObject(target)) {
    throw Completion.Throw("TypeError", "Right-hand side of 'instanceof' is not an object");
  }

  const instOfHandler = yield* get(target, realm.types.symbols.hasInstance);
  if (isCallable(instOfHandler)) {
    const result = yield* call(instOfHandler, target, [V]);
    return yield* toBoolean.js(result);
  } else if (!isStaticJsUndefined(instOfHandler)) {
    throw Completion.Throw("TypeError", "Symbol.hasInstance is not a function");
  }

  if (!isCallable(target)) {
    throw Completion.Throw("TypeError", "Right-hand side of 'instanceof' is not callable");
  }

  return yield* ordinaryHasInstance(target, V, realm);
}
