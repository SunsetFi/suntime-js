import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { isStaticJsObject, StaticJsObject } from "../types/StaticJsObject.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { createNonEnumerableDataPropertyOrThrow } from "./create-non-enumerable-data-property-or-throw.js";
import { get } from "./get.js";
import { hasProperty } from "./has-property.js";

export function* installErrorCause(
  obj: StaticJsObject,
  options: StaticJsValue,
): EvaluationGenerator<void> {
  if (isStaticJsObject(options) && (yield* hasProperty(options, "cause"))) {
    const cause = yield* get(options, "cause");
    yield* createNonEnumerableDataPropertyOrThrow(obj, "cause", cause);
  }
}
