import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsFunctionEnvironmentRecord } from "../environments/implementation/StaticJsFunctionEnvironmentRecord.js";
import { StaticJsObject } from "../types/StaticJsObject.js";

import { getThisEnvironment } from "./get-this-environment.js";

export function* getSuperConstructor(): EvaluationGenerator<StaticJsObject | null> {
  const envRec = yield* getThisEnvironment();
  if (envRec instanceof StaticJsFunctionEnvironmentRecord === false) {
    throw new StaticJsEngineError("This environment record is not a function environment record");
  }

  const activeFunction = envRec.functionObject;

  const superConstructor = yield* activeFunction.getPrototypeOfEvaluator();
  return superConstructor;
}
