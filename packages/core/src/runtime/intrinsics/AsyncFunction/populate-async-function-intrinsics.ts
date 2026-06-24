import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { IntrinsicsRecord } from "../intrinsics.js";

import { createAsyncFunctionConstructor } from "./constructor/create-asyncfunction-constructor.js";
import { populateAsyncFunctionPrototype } from "./prototype/populate-asyncfunction-prototype.js";

export function* populateAsyncFunctionIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["AsyncFunction.prototype"];
  yield* populateAsyncFunctionPrototype(realm, proto);
  intrinsics["AsyncFunction"] = yield* createAsyncFunctionConstructor(
    realm,
    proto,
    intrinsics["Function"],
  );
}
