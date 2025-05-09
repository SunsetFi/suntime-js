import { parseExpression } from "@babel/parser";

import {
  compileExpression,
  compileModule,
  compileProgram,
} from "./compilation/factories.js";
import {
  ExpressionCompilationOptions,
  ProgramCompilationOptions,
} from "./compilation/options.js";
import StaticJsParseError from "./StaticJsParseError.js";
import { EvaluationOptions } from "./compilation/StaticJsCompilation.js";
import StaticJsModule from "../runtime/realm/interfaces/StaticJsModule.js";

export type EvaluateProgramOptions = EvaluationOptions &
  ProgramCompilationOptions;

export type EvaluateExpressionOptions = EvaluationOptions &
  ExpressionCompilationOptions;

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

/**
 * Evaluates a string as a javascript module, and returns the result.
 * @param code - The string containing javascript code to evaluate.
 * @param opts - The options for the evaluation.
 * @returns The StaticJsModule reference to the evaluated module.
 */
export function evaluateModule(
  code: string,
  opts?: EvaluateProgramOptions,
): StaticJsModule {
  const { realm } = opts ?? {};

  const compilation = compileModule(code);

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
