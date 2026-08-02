import { EvaluationContext } from "#evaluator/EvaluationContext.js";

export function incrementModuleAsyncEvaluationCount(): number {
  const realm = EvaluationContext.current.realm;
  return realm.incrementModuleAsyncEvaluationCount();
}
