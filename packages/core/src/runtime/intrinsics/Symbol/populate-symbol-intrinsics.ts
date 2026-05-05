import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { IntrinsicsRecord } from "../intrinsics.js";

import { createSymbolConstructor } from "./constructor/create-symbol-constructor.js";
import { populateSymbolPrototype } from "./prototype/populate-symbol-prototype.js";

export function* populateSymbolIntrinsics(
  record: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["Symbol.prototype"];
  yield* populateSymbolPrototype(record, proto);
  intrinsics["Symbol"] = yield* createSymbolConstructor(record, proto);
}
