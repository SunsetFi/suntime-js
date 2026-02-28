import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsPropertyKey } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../evaluator/completions/Completion.js";

import createDataProperty from "./create-data-property.js";

export default function* createDataPropertyOrThrow(
  O: StaticJsObjectLike,
  P: StaticJsPropertyKey,
  V: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<void> {
  const success = yield* createDataProperty(O, P, V);
  if (!success) {
    throw Completion.Throw(
      realm.types.error("TypeError", "Cannot create data property"),
    );
  }
}
