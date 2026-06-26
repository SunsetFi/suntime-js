import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsSymbolImpl } from "../../../types/implementation/primitives/StaticJsSymbolImpl.js";
import { getWellKnownSymbols } from "../../../types/implementation/well-known-symbols.js";
import type { IntrinsicsRecord } from "../intrinsics.js";

import { createSymbolConstructor } from "./constructor/create-symbol-constructor.js";
import { populateSymbolPrototype } from "./prototype/populate-symbol-prototype.js";

export function* populateSymbolIntrinsics(
  realm: StaticJsRealm,
  intrinsics: IntrinsicsRecord,
): EvaluationGenerator<void> {
  const proto = intrinsics["Symbol.prototype"];
  yield* populateSymbolPrototype(realm, proto);

  for (const [symbol, key] of getWellKnownSymbols()) {
    intrinsics[`Symbol.${key}`] = new StaticJsSymbolImpl(realm, symbol);
  }

  intrinsics["Symbol"] = yield* createSymbolConstructor(realm, proto);
}
