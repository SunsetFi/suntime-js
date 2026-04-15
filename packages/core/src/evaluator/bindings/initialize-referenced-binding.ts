import type { StaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { isEnvironmentReference } from "../../runtime/references/is-environment-reference.js";

export default function* initializeReferencedBinding(
  v: StaticJsReferenceRecord,
  w: StaticJsValue,
): EvaluationGenerator<void> {
  if (!isEnvironmentReference(v)) {
    throw new StaticJsEngineError("Referenced binding is not an environment reference");
  }

  yield* v.base.initializeBindingEvaluator(v.referencedName, w);
}
