import { Completion } from "#evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsCallable } from "#types/StaticJsCallable.js";
import { isStaticJsNull } from "#types/StaticJsNull.js";
import type { StaticJsPropertyKey } from "#types/StaticJsPropertyKey.js";
import { isStaticJsUndefined } from "#types/StaticJsUndefined.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { get } from "./get.js";
import { isCallable } from "./is-callable.js";
import { toObject } from "./to-object.js";

export function* getMethod(
  V: StaticJsValue,
  P: StaticJsPropertyKey,
  realm?: StaticJsRealm,
): EvaluationGenerator<StaticJsCallable | null> {
  const obj = yield* toObject(V, realm);
  const func = yield* get(obj, P);
  if (isStaticJsNull(func) || isStaticJsUndefined(func)) {
    return null;
  }

  if (!isCallable(func)) {
    throw yield* Completion.Throw.create("TypeError", "Method is not a function");
  }

  return func;
}
