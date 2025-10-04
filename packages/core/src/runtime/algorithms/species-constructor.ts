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
  O: StaticJsObjectLike,
  defaultConstructor: StaticJsFunction,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsFunction> {
  const C = yield* O.getPropertyEvaluator("constructor");

  if (isStaticJsUndefined(C)) {
    return defaultConstructor;
  }

  if (isStaticJsNull(C) || isStaticJsUndefined(C)) {
    return defaultConstructor;
  }

  if (!isStaticJsObjectLike(C)) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Constructor is not an object"),
    );
  }

  const S = yield* C.getPropertyEvaluator(realm.types.symbols.species);
  if (isStaticJsNull(S) || isStaticJsUndefined(S)) {
    return defaultConstructor;
  }

  if (!isStaticJsFunction(S) || !S.isConstructor) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Species is not a constructor"),
    );
  }

  return S;
}
