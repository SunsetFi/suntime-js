import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import createDataPropertyOrThrow from "../algorithms/create-data-property-or-throw.js";

export function* createIteratorResultObject(
  value: StaticJsValue,
  done: boolean,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  const result = realm.types.object();
  yield* createDataPropertyOrThrow(result, "value", value, realm);
  yield* createDataPropertyOrThrow(
    result,
    "done",
    realm.types.boolean(done),
    realm,
  );
  return result;
}
