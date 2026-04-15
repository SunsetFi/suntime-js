import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsPropertyDescriptorRecord } from "../types/StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";

import { Completion } from "../../evaluator/completions/Completion.js";

export function* definePropertyOrThrow(
  O: StaticJsObject,
  P: StaticJsPropertyKey,
  desc: StaticJsPropertyDescriptorRecord,
): EvaluationGenerator<void> {
  const success = yield* O.defineOwnPropertyEvaluator(P, desc);

  if (!success) {
    throw Completion.Throw("TypeError", `Cannot define property ${String(P)}`);
  }
}
