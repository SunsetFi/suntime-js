import { isStaticJsDataPropertyDescriptor } from "../../../runtime/types/StaticJsPropertyDescriptor.js";

import type EvaluationContext from "../../EvaluationContext.js";
import type EvaluationGenerator from "../../EvaluationGenerator.js";

export default function* canDeclareGlobalFunction(
  name: string,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  const existingProp =
    yield* context.realm.global.getOwnPropertyEvaluator(name);
  if (!existingProp) {
    return context.realm.global.extensible;
  }

  if (existingProp.configurable) {
    return true;
  }

  if (isStaticJsDataPropertyDescriptor(existingProp)) {
    return Boolean(existingProp.writable && existingProp.enumerable);
  }

  return false;
}
