import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObjectPropertyKey } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import toObject from "./to-object.js";

export default function* getV(
  V: StaticJsValue,
  P: StaticJsObjectPropertyKey,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsValue> {
  const O = yield* toObject(V, realm);
  return yield* O.getEvaluator(P);
}
