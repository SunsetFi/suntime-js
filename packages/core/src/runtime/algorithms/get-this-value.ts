import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsPropertyReferenceRecord } from "../references/StaticJsReferenceRecord.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

export function* getThisValue(
  v: StaticJsPropertyReferenceRecord,
): EvaluationGenerator<StaticJsValue> {
  // IsSuperReference
  if (v.thisValue) {
    return v.thisValue;
  }

  return v.base;
}
