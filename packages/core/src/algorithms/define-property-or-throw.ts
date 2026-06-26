import { Completion } from "../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";
import type { StaticJsPropertyDescriptorRecord } from "../runtime/types/StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "../runtime/types/StaticJsPropertyKey.js";

export function* definePropertyOrThrow(
  O: StaticJsObject,
  P: StaticJsPropertyKey,
  desc: StaticJsPropertyDescriptorRecord,
): EvaluationGenerator<void> {
  const success = yield* O.defineOwnPropertyEvaluator(P, desc);

  if (!success) {
    // TODO: Make this error message more clear:
    // non-configurable: cannot redefine property
    // non-extensible: cannot define property ${}, object is not extensible
    throw yield* Completion.Throw.create("TypeError", `Cannot define property ${String(P)}`);
  }
}
