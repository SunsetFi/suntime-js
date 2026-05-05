import { Completion } from "../../evaluator/completions/Completion.js";
import { Q } from "../../evaluator/completions/Q.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { isStaticJsBoundFunction } from "../types/StaticJsFunction.js";
import { isStaticJsObject, StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { get } from "./get.js";
import { instanceOfOperator } from "./instance-of-operator.js";
import { isCallable } from "./is-callable.js";
import { sameValue } from "./same-value.js";

export function* ordinaryHasInstance(
  constructor: StaticJsValue,
  instance: StaticJsValue,
): EvaluationGenerator<boolean> {
  if (!isCallable(constructor)) {
    return false;
  }

  if (isStaticJsBoundFunction(constructor)) {
    const boundConstructor = constructor.boundTargetFunction;
    return yield* instanceOfOperator(instance, boundConstructor);
  }

  if (!isStaticJsObject(instance)) {
    return false;
  }

  const proto = yield* get(constructor, "prototype");
  if (!isStaticJsObject(proto)) {
    throw Completion.Throw("TypeError", "Function has non-object prototype");
  }

  // Weird typing issue.
  // The type guard above isn't working.
  let curInstance: StaticJsObject = instance;
  while (true) {
    const nextInstance = yield* Q(curInstance.getPrototypeOfEvaluator());
    if (nextInstance == null) {
      return false;
    }
    if (sameValue(proto, nextInstance)) {
      return true;
    }

    curInstance = nextInstance;
  }
}
