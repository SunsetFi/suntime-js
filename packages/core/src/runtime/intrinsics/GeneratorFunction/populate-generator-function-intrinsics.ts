import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { createGeneratorFunctionConstructor } from "./create-generatorfunction-constructor.js";
import { populateGeneratorFunctionPrototype } from "./prototype/populate-generatorfunction-prototype.js";

export function* populateGeneratorFunctionIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["GeneratorFunction.prototype"];
  yield* populateGeneratorFunctionPrototype(realm, proto);
  intrinsics["GeneratorFunction"] = yield* createGeneratorFunctionConstructor(realm, proto);
}
