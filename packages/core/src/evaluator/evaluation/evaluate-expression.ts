import { parseExpression } from "@babel/parser";

import StaticJsParseError from "../../errors/StaticJsParseError.js";

import type {
  EvaluationOptions,
  ExpressionCompilationOptions,
} from "../compilation/options.js";
import { compileExpression } from "../compilation/compile-expression.js";

export type EvaluateExpressionOptions = EvaluationOptions &
  ExpressionCompilationOptions;

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
