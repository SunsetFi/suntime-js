import { parseExpression } from "@babel/parser";

import { compileExpression, compileProgram } from "./compilation/factories.js";
import {
  ExpressionCompilationOptions,
  ProgramCompilationOptions,
} from "./compilation/options.js";
import StaticJsParseError from "./StaticJsParseError.js";
import { EvaluationOptions } from "./compilation/StaticJsCompilation.js";

export type EvaluateProgramOptions = EvaluationOptions &
  ProgramCompilationOptions;

export type EvaluateExpressionOptions = EvaluationOptions &
  ExpressionCompilationOptions;

/**
 * Evaluates a string as a javascript program, and returns the result.
 * @param string - The string containing javascript code to evaluate.
 * @param realm - The realm in which to evaluate the code.
 * @returns The native javascript result of evaluating the code.
 * @public
 */
export function evaluateProgram(
  string: string,
  opts?: EvaluateProgramOptions,
): unknown {
  const { realm, ...compilationOpts } = opts ?? {};

  const compilation = compileProgram(string, compilationOpts);

  return compilation.evaluate({ realm });
}

/**
 * Evaluates a string as a javascript expression, and returns the result.
 * @param string - The string containing javascript expression to evaluate.
 * @param realm - The realm in which to evaluate the expression.
 * @returns The native javascript result of evaluating the code.
 * @public
 */
export function evaluateExpression(
  string: string,
  opts?: EvaluateExpressionOptions,
): unknown {
  const { realm } = opts ?? {};

  const ast = parseExpression(string);

  if (ast.errors && ast.errors.length) {
    throw new StaticJsParseError(
      `Error parsing expression: ${ast.errors[0].code}.`,
    );
  }

  return compileExpression(string).evaluate({ realm });
}
