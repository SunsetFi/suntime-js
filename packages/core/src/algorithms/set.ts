import { Completion } from "../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";
import type { StaticJsPropertyKey } from "../runtime/types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

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
    throw yield* Completion.Throw.create(
      "TypeError",
      `Cannot assign to read only property '${String(p)}' of object '${objStr}'`,
    );
  }
}
