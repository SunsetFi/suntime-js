import { Completion } from "../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";
import type { StaticJsPropertyKey } from "../runtime/types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

import { createDataProperty } from "./create-data-property.js";

export function* createDataPropertyOrThrow(
  O: StaticJsObject,
  P: StaticJsPropertyKey,
  V: StaticJsValue,
): EvaluationGenerator<void> {
  const success = yield* createDataProperty(O, P, V);
  if (!success) {
    throw yield* Completion.Throw.create("TypeError", "Cannot create data property");
  }
}
