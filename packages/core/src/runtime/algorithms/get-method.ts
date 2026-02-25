import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsFunction, type StaticJsFunction } from "../types/StaticJsFunction.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsObjectPropertyKey } from "../types/StaticJsObjectLike.js";

import toObject from "./to-object.js";

export default function* getMethod(
  V: StaticJsValue,
  P: StaticJsObjectPropertyKey,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsFunction | null> {
  const obj = yield* toObject(V, realm);
  const func = yield* obj.getEvaluator(P);
  if (isStaticJsNull(func) || isStaticJsUndefined(func)) {
    return null;
  }

  if (!isStaticJsFunction(func)) {
    throw new ThrowCompletion(realm.types.error("TypeError", "Method is not a function"));
  }

  return func;
}
