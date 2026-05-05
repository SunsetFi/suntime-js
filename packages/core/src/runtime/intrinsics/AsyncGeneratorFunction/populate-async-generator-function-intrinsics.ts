import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { createAsyncGeneratorFunctionConstructor } from "./create-asyncgeneratorfunction-constructor.js";
import { populateAsyncGeneratorFunctionPrototype } from "./prototype/populate-asyncgeneratorfunction-prototype.js";

export function* populateAsyncGeneratorFunctionIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["AsyncGeneratorFunction.prototype"];
  yield* populateAsyncGeneratorFunctionPrototype(realm, proto);
  intrinsics["AsyncGeneratorFunction"] = yield* createAsyncGeneratorFunctionConstructor(
    realm,
    proto,
    intrinsics["Function"],
  );
}
