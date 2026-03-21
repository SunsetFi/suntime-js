import type { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";
import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import Q from "../completions/Q.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { FunctionEnterCommand } from "./FunctionEnterCommand.js";
import { FunctionExitCommand } from "./FunctionExitCommand.js";

export function* FunctionEvaluateBodyCommand(
  func: StaticJsFunction,
  evaluator: EvaluationGenerator<StaticJsValue> | (() => EvaluationGenerator<StaticJsValue>),
): EvaluationGenerator<StaticJsValue> {
  yield* FunctionEnterCommand(func);
  try {
    if (typeof evaluator === "function") {
      evaluator = evaluator();
    }

    return yield* Q(evaluator);
  } finally {
    yield* FunctionExitCommand();
  }
}
