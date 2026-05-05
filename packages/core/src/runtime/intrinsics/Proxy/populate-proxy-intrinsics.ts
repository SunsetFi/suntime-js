import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { createProxyConstructor } from "./constructor/create-proxy-constructor.js";

export function* populateProxyIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  intrinsics["Proxy"] = yield* createProxyConstructor(realm);
}
