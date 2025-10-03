import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import {
  isStaticJsFunction,
  type StaticJsFunction,
} from "../types/StaticJsFunction.js";
import {
  isStaticJsObjectLike,
  type StaticJsObjectLike,
} from "../types/StaticJsObjectLike.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

export default function* speciesConstructor(
  obj: StaticJsObjectLike,
  defaultConstructor: StaticJsFunction,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsFunction> {
  const ctor = yield* obj.getPropertyEvaluator("constructor");

  if (isStaticJsNull(ctor) || isStaticJsUndefined(ctor)) {
    return defaultConstructor;
  }

  if (!isStaticJsObjectLike(ctor)) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Constructor is not an object"),
    );
  }

  // TODO: Get species from symbol.

  if (!isStaticJsFunction(ctor) || !ctor.isConstructor) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Species is not a constructor"),
    );
  }

  return ctor;
}
