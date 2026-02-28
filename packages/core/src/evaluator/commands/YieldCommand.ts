import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import { isStaticJsValue, type StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface YieldCommand extends EvaluatorCommandBase {
  command: "yield";
  value: StaticJsValue;
}
export function* YieldCommand(value: StaticJsValue): EvaluationGenerator<StaticJsValue> {
  const result = yield {
    command: "yield",
    value,
  };

  if (!isStaticJsValue(result)) {
    throw new StaticJsEngineError("Expected StaticJsValue from yield, got: " + result);
  }

  return result;
}
