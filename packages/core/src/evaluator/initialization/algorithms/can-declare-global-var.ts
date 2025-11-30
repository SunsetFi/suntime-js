import type EvaluationContext from "../../EvaluationContext.js";
import type EvaluationGenerator from "../../EvaluationGenerator.js";

export default function* canDeclareGlobalVar(
  name: string,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  const hasOwnProp = yield* context.realm.global.hasOwnPropertyEvaluator(name);
  if (hasOwnProp) {
    return true;
  }

  return context.realm.global.extensible;
}
