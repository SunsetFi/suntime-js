import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import createDataPropertyOrThrow from "../algorithms/create-data-property-or-throw.js";

export function* createIteratorResultObject(
  value: StaticJsValue,
  done: boolean,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObject> {
  const result = realm.types.object();
  yield* createDataPropertyOrThrow(result, "value", value);
  yield* createDataPropertyOrThrow(result, "done", realm.types.boolean(done));
  return result;
}
