import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../evaluator/completions/Completion.js";

import { type StaticJsFunction } from "../types/StaticJsFunction.js";
import { isStaticJsObject, type StaticJsObject } from "../types/StaticJsObject.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import isConstructor from "./is-constructor.js";
import { get } from "./get.js";

export default function* speciesConstructor(
  O: StaticJsObject,
  defaultConstructor: StaticJsFunction,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsFunction> {
  const C = yield* get(O, "constructor");

  if (isStaticJsUndefined(C)) {
    return defaultConstructor;
  }

  if (isStaticJsNull(C) || isStaticJsUndefined(C)) {
    return defaultConstructor;
  }

  if (!isStaticJsObject(C)) {
    throw Completion.Throw("TypeError", "Constructor is not an object");
  }

  const S = yield* get(C, realm.types.symbols.species);
  if (isStaticJsNull(S) || isStaticJsUndefined(S)) {
    return defaultConstructor;
  }

  if (!isConstructor(S)) {
    throw Completion.Throw("TypeError", "Species is not a constructor");
  }

  return S as StaticJsFunction;
}
