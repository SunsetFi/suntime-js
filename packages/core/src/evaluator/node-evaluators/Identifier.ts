import { Identifier } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import { NormalCompletion } from "../completions/NormalCompletion.js";
import {
  ThrowCompletion,
  isThrowCompletion,
} from "../completions/ThrowCompletion.js";

export default function* identifierNodeEvaluator(
  node: Identifier,
  context: EvaluationContext,
): EvaluationGenerator {
  const hasBinding = yield* context.env.hasBindingEvaluator(node.name);
  if (isThrowCompletion(hasBinding)) {
    return hasBinding;
  }

  if (!hasBinding) {
    // FIXME: Use real error.
    return ThrowCompletion(
      context.realm.types.error(
        "ReferenceError",
        `${node.name} is not defined`,
      ),
    );
  }

  const value = yield* context.env.getBindingValueEvaluator(
    node.name,
    context.realm.strict,
  );
  if (isThrowCompletion(value)) {
    return value;
  }
  return NormalCompletion(value);
}
