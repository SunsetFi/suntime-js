import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

export function* set(
  o: StaticJsObjectLike,
  p: StaticJsPropertyKey,
  v: StaticJsValue,
  throwError: boolean,
): EvaluationGenerator<void> {
  const success = yield* o.setEvaluator(p, v, o);
  if (!success && throwError) {
    throw Completion.Throw(
      "TypeError",
      `Cannot assign to read only property '${String(p)}' of object '${o.toStringSync()}'`,
    );
  }
}
