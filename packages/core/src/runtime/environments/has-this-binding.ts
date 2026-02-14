import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";

import type { StaticJsEnvironmentRecord } from "./StaticJsEnvironmentRecord.js";

export default function* getThisBinding(
  env: StaticJsEnvironmentRecord,
): EvaluationGenerator<StaticJsValue> {
  let current: StaticJsEnvironmentRecord | null = env;
  while (current) {
    if (yield* current.hasThisBindingEvaluator()) {
      return yield* current.getThisBindingEvaluator();
    }
    current = current.outerEnv;
  }

  throw new StaticJsEngineError("No this binding found");
}
