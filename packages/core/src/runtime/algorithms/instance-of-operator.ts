import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsFunction } from "../types/StaticJsFunction.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";

import toBoolean from "./to-boolean.js";
import ordinaryHasInstance from "./ordinary-has-instance.js";
import call from "./call.js";
import { get } from "./get.js";

export default function* instanceOfOperator(
  V: StaticJsValue,
  target: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<boolean> {
  if (!isStaticJsObjectLike(target)) {
    throw Completion.Throw("TypeError", "Right-hand side of 'instanceof' is not an object");
  }

  const instOfHandler = yield* get(target, realm.types.symbols.hasInstance);
  if (isStaticJsFunction(instOfHandler)) {
    const result = yield* call(instOfHandler, target, [V]);
    return yield* toBoolean.js(result);
  } else if (!isStaticJsUndefined(instOfHandler)) {
    throw Completion.Throw("TypeError", "Symbol.hasInstance is not a function");
  }

  if (!isStaticJsFunction(target)) {
    throw Completion.Throw("TypeError", "Right-hand side of 'instanceof' is not callable");
  }

  return yield* ordinaryHasInstance(target, V, realm);
}
