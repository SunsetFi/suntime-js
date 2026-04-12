import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { StaticJsFunctionEnvironmentRecord } from "../environments/implementation/StaticJsFunctionEnvironmentRecord.js";

import { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { StaticJsUndefined } from "../types/StaticJsUndefined.js";

import { getThisEnvironment } from "./get-this-environment.js";

export function* getNewTarget(): EvaluationGenerator<StaticJsObjectLike | StaticJsUndefined> {
  const envRec = yield* getThisEnvironment();
  if (envRec instanceof StaticJsFunctionEnvironmentRecord === false) {
    throw new StaticJsEngineError(
      "NewTarget can only be accessed within a function environment record.",
    );
  }

  return envRec.newTarget;
}
