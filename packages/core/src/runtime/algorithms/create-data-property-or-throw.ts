import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../evaluator/completions/Completion.js";

import createDataProperty from "./create-data-property.js";

export default function* createDataPropertyOrThrow(
  O: StaticJsObject,
  P: StaticJsPropertyKey,
  V: StaticJsValue,
): EvaluationGenerator<void> {
  const success = yield* createDataProperty(O, P, V);
  if (!success) {
    throw Completion.Throw("TypeError", "Cannot create data property");
  }
}
