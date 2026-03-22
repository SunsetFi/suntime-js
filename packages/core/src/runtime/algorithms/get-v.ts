import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsPropertyKey } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import toObject from "./to-object.js";

export default function* getV(
  V: StaticJsValue,
  P: StaticJsPropertyKey,
): EvaluationGenerator<StaticJsValue> {
  const O = yield* toObject(V);
  return yield* O.getEvaluator(P);
}
