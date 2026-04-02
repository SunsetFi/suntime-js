import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import type { StaticJsPropertyDescriptorRecord } from "../types/StaticJsPropertyDescriptor.js";

export default function* definePropertyOrThrow(
  O: StaticJsObjectLike,
  P: StaticJsPropertyKey,
  desc: StaticJsPropertyDescriptorRecord,
): EvaluationGenerator<void> {
  const success = yield* O.defineOwnPropertyEvaluator(P, desc);

  if (!success) {
    throw Completion.Throw("TypeError", `Cannot define property ${String(P)}`);
  }
}
