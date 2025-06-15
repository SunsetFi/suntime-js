import type { Identifier } from "@babel/types";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

export default function* identifierNodeEvaluator(
  node: Identifier,
  context: EvaluationContext,
): EvaluationGenerator {
  const hasBinding = yield* context.env.hasBindingEvaluator(node.name);

  if (!hasBinding) {
    throw new ThrowCompletion(
      context.realm.types.error(
        "ReferenceError",
        `${node.name} is not defined`,
      ),
    );
  }

  const value = yield* context.env.getBindingValueEvaluator(
    node.name,
    context.strict,
  );
  return value;
}
