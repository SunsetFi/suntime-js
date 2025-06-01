import { StaticJsModule } from "../../runtime/modules/StaticJsModule.js";

import {
  EvaluationOptions,
  ProgramCompilationOptions,
} from "../compilation/options.js";
import { compileModule } from "../compilation/compile-module.js";

export type EvaluateModuleOptions = EvaluationOptions &
  ProgramCompilationOptions;

/**
 * Evaluates a string as a javascript module, and returns the result.
 * @param code - The string containing javascript code to evaluate.
 * @param opts - The options for the evaluation.
 * @returns The StaticJsModule reference to the evaluated module.
 */
export function evaluateModule(
  code: string,
  opts?: EvaluateModuleOptions,
): Promise<StaticJsModule> {
  const { realm } = opts ?? {};

  const compilation = compileModule(code);

  return compilation.evaluate({ realm });
}
