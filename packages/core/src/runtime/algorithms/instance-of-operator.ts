import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { call } from "./call.js";
import { getMethod } from "./get-method.js";
import { isCallable } from "./is-callable.js";
import { ordinaryHasInstance } from "./ordinary-has-instance.js";
import { toBoolean } from "./to-boolean.js";

export function* instanceOfOperator(
  value: StaticJsValue,
  target: StaticJsValue,
): EvaluationGenerator<boolean> {
  const { realm } = EvaluationContext.current;

  if (!isStaticJsObject(target)) {
    throw Completion.Throw("TypeError", "Right-hand side of 'instanceof' is not an object");
  }

  const instOfHandler = yield* getMethod(target, realm.types.symbols.hasInstance);
  if (instOfHandler) {
    const result = yield* call(instOfHandler, target, [value]);
    return yield* toBoolean.js(result);
  }

  if (!isCallable(target)) {
    throw Completion.Throw("TypeError", "Right-hand side of 'instanceof' is not callable");
  }

  return yield* ordinaryHasInstance(target, value);
}
