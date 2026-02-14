import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import { type StaticJsFunction } from "../types/StaticJsFunction.js";
import {
  isStaticJsObjectLike,
  type StaticJsObjectLike,
} from "../types/StaticJsObjectLike.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import isConstructor from "./is-constructor.js";

export default function* speciesConstructor(
  O: StaticJsObjectLike,
  defaultConstructor: StaticJsFunction,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsFunction> {
  const C = yield* O.getEvaluator("constructor");

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

  const S = yield* C.getEvaluator(realm.types.symbols.species);
  if (isStaticJsNull(S) || isStaticJsUndefined(S)) {
    return defaultConstructor;
  }

  const speciesIsConstructor = yield* isConstructor(S, realm);
  if (!speciesIsConstructor) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Species is not a constructor"),
    );
  }

  return S as StaticJsFunction;
}
