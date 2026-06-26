import type { StaticJsPropertyReferenceRecord } from "#references/StaticJsReferenceRecord.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";

export function* getThisValue(
  v: StaticJsPropertyReferenceRecord,
): EvaluationGenerator<StaticJsValue> {
  // IsSuperReference
  if (v.thisValue) {
    return v.thisValue;
  }

  return v.base;
}
