import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { call } from "./call.js";
import { getV } from "./get-v.js";

export function* invoke(
  V: StaticJsValue,
  P: StaticJsPropertyKey,
  argumentsList: StaticJsValue[],
): EvaluationGenerator<StaticJsValue> {
  const func = yield* getV(V, P);
  return yield* call(func, V, argumentsList);
}
