import type { StaticJsReferenceRecord } from "#references/StaticJsReferenceRecord.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { isEnvironmentReference } from "#references/is-environment-reference.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* initializeReferencedBinding(
  v: StaticJsReferenceRecord,
  w: StaticJsValue,
): EvaluationGenerator<void> {
  if (!isEnvironmentReference(v)) {
    throw new StaticJsEngineError("Referenced binding is not an environment reference");
  }

  yield* v.base.initializeBindingEvaluator(v.referencedName, w);
}
