import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";
import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsFunction } from "../types/StaticJsFunction.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import {
  isStaticJsObjectLike,
  type StaticJsObjectLike,
} from "../types/StaticJsObjectLike.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import isArray from "./is-array.js";
import isConstructor from "./is-constructor.js";

export default function* arraySpeciesCreate(
  originalArray: StaticJsValue,
  length: number,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  const originalIsArray = yield* isArray(originalArray, realm);
  if (!originalIsArray) {
    return realm.types.array(new Array(length));
  }

  // The above should guarentee this, but we want the type guard.
  if (!isStaticJsObjectLike(originalArray)) {
    return realm.types.array(new Array(length));
  }

  let constructor = yield* originalArray.getPropertyEvaluator("constructor");
  if (isStaticJsNull(constructor)) {
    constructor = realm.types.undefined;
  }

  if (isStaticJsUndefined(constructor)) {
    return realm.types.array(new Array(length));
  }

  const constructorIsConstructor = yield* isConstructor(constructor, realm);
  // isStaticJsFunction is redundant,
  // but needed to type-guard constructor.
  if (!constructorIsConstructor || !isStaticJsFunction(constructor)) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Constructor is not a constructor"),
    );
  }

  const result = yield* constructor.constructEvaluator(
    realm.types.number(length),
  );
  if (!isStaticJsObjectLike(result)) {
    // This isn't in the spec but... we always want to be able to set properties.
    // FIXME: According to the spec, it throws when trying to create the property,
    // rather than here.
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Constructor did not produce an object"),
    );
  }

  return result;
}
