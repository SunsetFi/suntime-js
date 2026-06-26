import { putValue } from "../../algorithms/put-value.js";
import type { StaticJsEnvironmentRecord } from "../../environments/StaticJsEnvironmentRecord.js";
import getIdentifierReference from "../../references/get-identifier-reference.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

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
