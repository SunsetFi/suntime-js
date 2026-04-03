import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";

export function* getThisEnvironment(): EvaluationGenerator<StaticJsEnvironmentRecord> {
  let env = EvaluationContext.current.lexicalEnv;
  while (true) {
    const exists = yield* env.hasThisBindingEvaluator();
    if (exists) {
      return env;
    }

    const outerEnv = env.outerEnv;
    if (!outerEnv) {
      throw new ReferenceError("No environment with a this binding found");
    }
    env = outerEnv;
  }
}
