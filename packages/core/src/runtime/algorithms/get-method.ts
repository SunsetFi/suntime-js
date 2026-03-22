import { Completion } from "../../evaluator/completions/Completion.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsFunction, type StaticJsFunction } from "../types/StaticJsFunction.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsPropertyKey } from "../types/StaticJsObjectLike.js";

import toObject from "./to-object.js";

export default function* getMethod(
  V: StaticJsValue,
  P: StaticJsPropertyKey,
): EvaluationGenerator<StaticJsFunction | null> {
  const obj = yield* toObject(V);
  const func = yield* obj.getEvaluator(P);
  if (isStaticJsNull(func) || isStaticJsUndefined(func)) {
    return null;
  }

  if (!isStaticJsFunction(func)) {
    throw Completion.Throw("TypeError", "Method is not a function");
  }

  return func;
}
