import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsPropertyKey } from "../runtime/types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

import { toObject } from "./to-object.js";

export function* getV(
  V: StaticJsValue,
  P: StaticJsPropertyKey,
): EvaluationGenerator<StaticJsValue> {
  const O = yield* toObject(V);
  return yield* O.getEvaluator(P, V);
}
