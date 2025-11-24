import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";

import type { StaticJsReferenceRecord } from "./StaticJsReferenceRecord.js";

export function* getIdentifierReference(
  env: StaticJsEnvironmentRecord | null,
  name: string,
  strict: boolean,
  depth = 0,
): EvaluationGenerator<StaticJsReferenceRecord> {
  if (depth > 50) {
    throw new Error(
      "Maximum environment depth exceeded while resolving identifier reference.",
    );
  }

  if (env === null) {
    return {
      referencedName: name,
      strict,
      thisValue: null,
      base: null,
    };
  }

  const exists = yield* env.hasBindingEvaluator(name);

  if (exists) {
    return {
      referencedName: name,
      strict,
      thisValue: null,
      base: env,
    };
  }

  return yield* getIdentifierReference(env.outerEnv, name, strict, depth++);
}
