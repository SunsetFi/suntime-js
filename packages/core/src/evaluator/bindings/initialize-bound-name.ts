import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import putValue from "../../runtime/algorithms/put-value.js";
import getIdentifierReference from "../../runtime/references/get-identifier-reference.js";
import { EvaluationContext } from "../EvaluationContext.js";

export default function* initializeBoundName(
  name: string,
  value: StaticJsValue,
  environment: StaticJsEnvironmentRecord | null,
): EvaluationGenerator<void> {
  if (environment) {
    yield* environment.initializeBindingEvaluator(name, value);
  } else {
    const { lexicalEnv, strict } = EvaluationContext.current;
    const lhs = yield* getIdentifierReference(lexicalEnv, name, strict);
    yield* putValue(lhs, value);
  }
}
