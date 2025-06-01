import {
  ProgramCompilationOptions,
  EvaluationOptions,
} from "../compilation/options.js";
import { compileProgram } from "../compilation/compile-program.js";

export type EvaluateProgramOptions = EvaluationOptions &
  ProgramCompilationOptions;

/**
 * Evaluates a string as a javascript program, and returns the result.
 * @param code - The string containing javascript code to evaluate.
 * @param opts - The options for the evaluation.
 * @returns The native javascript result of evaluating the code.
 * @public
 */
export function evaluateProgram(
  code: string,
  opts?: EvaluateProgramOptions,
): unknown {
  const { realm } = opts ?? {};

  const compilation = compileProgram(code);

  return compilation.evaluate({ realm });
}
