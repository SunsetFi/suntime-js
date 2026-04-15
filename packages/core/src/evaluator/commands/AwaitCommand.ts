import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { isStaticJsValue, type StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { EvaluatorCommand } from "./EvaluatorCommand.js";

export interface AwaitCommand extends EvaluatorCommandBase {
  command: "await";
  awaitable: StaticJsValue;
}
export function* AwaitCommand(awaitable: StaticJsValue): EvaluationGenerator<StaticJsValue> {
  const result = yield {
    command: "await",
    awaitable,
  };

  if (!isStaticJsValue(result)) {
    throw new StaticJsEngineError("Expected StaticJsValue from awaitable, got: " + result);
  }

  return result;
}

AwaitCommand.is = function (value: EvaluatorCommand): value is AwaitCommand {
  return value.command === "await";
};
