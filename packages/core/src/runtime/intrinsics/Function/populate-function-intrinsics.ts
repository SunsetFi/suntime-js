import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { createFunctionConstructor } from "./create-function-constructor.js";
import { populateFunctionPrototype } from "./prototype/populate-function-prototype.js";

export function* populateFunctionIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["Function.prototype"];
  yield* populateFunctionPrototype(realm, proto);
  intrinsics["Function"] = yield* createFunctionConstructor(realm, proto);
}
