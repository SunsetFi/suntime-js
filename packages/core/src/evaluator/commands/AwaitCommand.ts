import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import {
  isStaticJsValue,
  type StaticJsValue,
} from "../../runtime/types/StaticJsValue.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";

import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface AwaitCommand extends EvaluatorCommandBase {
  kind: "await";
  awaitable: StaticJsValue;
}
export function* AwaitCommand(
  awaitable: StaticJsValue,
): EvaluationGenerator<StaticJsValue> {
  const result = yield {
    kind: "await",
    awaitable,
  };

  if (!isStaticJsValue(result)) {
    throw new StaticJsEngineError(
      "Expected StaticJsValue from awaitable, got: " + result,
    );
  }

  return result;
}
