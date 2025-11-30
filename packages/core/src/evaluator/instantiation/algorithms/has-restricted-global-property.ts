import type EvaluationContext from "../../EvaluationContext.js";
import type EvaluationGenerator from "../../EvaluationGenerator.js";

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
