import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsObjectPropertyKey } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import createDataProperty from "./create-data-property.js";

export default function* createDataPropertyOrThrow(
  O: StaticJsObjectLike,
  P: StaticJsObjectPropertyKey,
  V: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<void> {
  const success = yield* createDataProperty(O, P, V);
  if (!success) {
    throw new ThrowCompletion(
      realm.types.error("TypeError", "Cannot create data property"),
    );
  }
}
