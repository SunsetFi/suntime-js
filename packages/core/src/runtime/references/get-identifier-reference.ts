import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";

import type { StaticJsReferenceRecord } from "./StaticJsReferenceRecord.js";

export default function* getIdentifierReference(
  env: StaticJsEnvironmentRecord | null,
  name: string,
  strict: boolean,
): EvaluationGenerator<StaticJsReferenceRecord> {
  let current = env;
  while (current) {
    const exists = yield* current.hasBindingEvaluator(name);
    if (exists) {
      return {
        referencedName: name,
        strict,
        thisValue: null,
        base: current,
      };
    }

    current = current.outerEnv;
  }

  return {
    referencedName: name,
    strict,
    thisValue: null,
    base: null,
  };
}
