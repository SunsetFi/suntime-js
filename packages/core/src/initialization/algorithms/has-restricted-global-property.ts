import type EvaluationContext from "../../evaluator/EvaluationContext.js";
import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

export default function* hasRestrictedGlobalProperty(
  name: string,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  const decl =
    yield* context.realm.global.getOwnPropertyDescriptorEvaluator(name);
  if (!decl || !decl.configurable) {
    return false;
  }

  return true;
}
