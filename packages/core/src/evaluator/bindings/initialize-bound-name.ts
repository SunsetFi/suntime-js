import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import { getIdentifierReference } from "../../runtime/references/get-identifier-reference.js";

import putValue from "../../runtime/algorithms/put-value.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* initializeBoundName(
  name: string,
  value: StaticJsValue,
  environment: StaticJsEnvironmentRecord | null,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  if (environment) {
    yield* environment.initializeBindingEvaluator(name, value);
  } else {
    const lhs = yield* getIdentifierReference(context.lexicalEnv, name, context.strict);
    yield* putValue(lhs, value, context.realm);
  }
}
