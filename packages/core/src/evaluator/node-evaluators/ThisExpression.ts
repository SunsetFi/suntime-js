import type { ThisExpression } from "@babel/types";

import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

export default function* thisExpressionNodeEvaluator(
  _node: ThisExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  let env: StaticJsEnvironmentRecord | null = context.lexicalEnv;
  while (env) {
    if (yield* env.hasThisBindingEvaluator()) {
      break;
    }
    env = env.outerEnv;
  }

  if (!env) {
    return context.realm.types.undefined;
  }

  return yield* env.getThisBindingEvaluator();
}
