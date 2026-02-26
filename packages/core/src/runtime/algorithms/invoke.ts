import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsPropertyKey } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import call from "./call.js";
import getV from "./get-v.js";

export default function* invoke(
  V: StaticJsValue,
  P: StaticJsPropertyKey,
  argumentsList: StaticJsValue[],
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsValue> {
  const func = yield* getV(V, P, realm);
  return yield* call(func, V, argumentsList, realm);
}
