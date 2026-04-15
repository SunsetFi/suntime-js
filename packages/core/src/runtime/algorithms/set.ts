import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsObject } from "../types/StaticJsObject.js";
import { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { toString } from "./to-string.js";

export function* set(
  o: StaticJsObject,
  p: StaticJsPropertyKey,
  v: StaticJsValue,
  throwError: boolean,
): EvaluationGenerator<void> {
  const success = yield* o.setEvaluator(p, v, o);
  if (!success && throwError) {
    const objStr = yield* toString.js(o);
    throw Completion.Throw(
      "TypeError",
      `Cannot assign to read only property '${String(p)}' of object '${objStr}'`,
    );
  }
}
