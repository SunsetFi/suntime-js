import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";

import {
  staticJsResolvedReferenceRecord,
  staticJsUnresolvedReferenceRecord,
  type StaticJsResolvedReference,
  type StaticJsUnresolvedReferenceRecord,
} from "./StaticJsReferenceRecord.js";

export default function* getIdentifierReference(
  env: StaticJsEnvironmentRecord | null,
  name: string,
  strict: boolean,
): EvaluationGenerator<StaticJsResolvedReference | StaticJsUnresolvedReferenceRecord> {
  let current = env;
  while (current) {
    const exists = yield* current.hasBindingEvaluator(name);
    if (exists) {
      return staticJsResolvedReferenceRecord(name, current, strict, null);
    }

    current = current.outerEnv;
  }

  return staticJsUnresolvedReferenceRecord(name, strict);
}
