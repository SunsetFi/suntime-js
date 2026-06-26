import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsPropertyReferenceRecord } from "../runtime/references/StaticJsReferenceRecord.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

export function* getThisValue(
  v: StaticJsPropertyReferenceRecord,
): EvaluationGenerator<StaticJsValue> {
  // IsSuperReference
  if (v.thisValue) {
    return v.thisValue;
  }

  return v.base;
}
