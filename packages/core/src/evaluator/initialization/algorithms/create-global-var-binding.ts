import type EvaluationContext from "../../EvaluationContext.js";
import type EvaluationGenerator from "../../EvaluationGenerator.js";

export default function* createGlobalVarBinding(
  name: string,
  deletable: boolean,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const objRec = context.realm.objectEnv;
  const globalObject = context.realm.global;
  const hasProperty = yield* globalObject.hasOwnPropertyEvaluator(name);
  const extensible = globalObject.extensible;

  if (!hasProperty && extensible) {
    yield* objRec.createMutableBindingEvaluator(name, deletable);
    yield* objRec.initializeBindingEvaluator(
      name,
      context.realm.types.undefined,
    );
  }
}
