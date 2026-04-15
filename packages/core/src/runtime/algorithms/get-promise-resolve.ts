import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { isStaticJsCallable, StaticJsCallable } from "../types/StaticJsCallable.js";

import { get } from "./get.js";

export function* getPromiseResolve(
  promiseConstructor: StaticJsCallable,
): EvaluationGenerator<StaticJsCallable> {
  const promiseResolve = yield* get(promiseConstructor, "resolve");
  if (!isStaticJsCallable(promiseResolve)) {
    throw Completion.Throw("TypeError", "Promise.resolve is not callable");
  }
  return promiseResolve;
}
