import type EvaluationContext from "../../EvaluationContext.js";
import type EvaluationGenerator from "../../EvaluationGenerator.js";

export default function* hasLexicalDeclaration(
  name: string,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  const dclRec = context.realm.declarativeRecord;
  return yield* dclRec.hasBindingEvaluator(name);
}
