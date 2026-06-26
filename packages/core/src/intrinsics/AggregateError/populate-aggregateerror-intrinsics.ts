import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";

import type { IntrinsicsRecord } from "../intrinsics.js";

import { createAggregateErrorConstructor } from "./create-aggregateerror-constructor.js";
import { populateAggregateErrorPrototype } from "./populate-aggregateerror-prototype.js";

export function* populateAggregateErrorIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["AggregateError.prototype"];
  yield* populateAggregateErrorPrototype(realm, proto);
  intrinsics["AggregateError"] = yield* createAggregateErrorConstructor(realm, proto);
}
