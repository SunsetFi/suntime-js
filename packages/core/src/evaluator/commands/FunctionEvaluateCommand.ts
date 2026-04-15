import type { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { Q } from "../completions/Q.js";
import { FunctionEnterCommand } from "./FunctionEnterCommand.js";
import { FunctionExitCommand } from "./FunctionExitCommand.js";

export function* FunctionEvaluateBodyCommand<T>(
  func: StaticJsFunction,
  evaluator: EvaluationGenerator<T> | (() => EvaluationGenerator<T>),
): EvaluationGenerator<T> {
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
