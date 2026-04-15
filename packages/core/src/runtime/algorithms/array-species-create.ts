import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsObject, type StaticJsObject } from "../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { arrayCreate } from "./array-create.js";
import { construct } from "./construct.js";
import { get } from "./get.js";
import { isArray } from "./is-array.js";
import { isConstructor } from "./is-constructor.js";
import { sameValue } from "./same-value.js";

export function* arraySpeciesCreate(
  originalArray: StaticJsValue,
  length: number,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObject> {
  const originalIsArray = yield* isArray(originalArray, realm);
  if (!originalIsArray) {
    return yield* arrayCreate(length);
  }

  // The above should guarentee this, but we want the type guard.
  if (!isStaticJsObject(originalArray)) {
    throw new StaticJsEngineError("originalArray returned isArray true but is not an object");
  }

  let c = yield* get(originalArray, "constructor");
  if (isConstructor(c)) {
    if (c.realm !== realm) {
      if (sameValue(c, c.realm.types.constructors.Array)) {
        c = realm.types.undefined;
      }
    }
  }

  if (isStaticJsObject(c)) {
    c = yield* get(c, realm.types.symbols.species);
    if (isStaticJsNull(c)) {
      c = realm.types.undefined;
    }
  }

  if (isStaticJsUndefined(c)) {
    return yield* arrayCreate(length);
  }

  if (!isConstructor(c)) {
    throw Completion.Throw("TypeError", "Array constructor is not a constructor");
  }

  return yield* construct(c, [realm.types.number(length)]);
}
