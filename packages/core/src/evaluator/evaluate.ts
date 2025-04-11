import { parseExpression } from "@babel/parser";

import StaticJsRealm from "../runtime/realm/interfaces/StaticJsRealm.js";
import StaticJsRealmFactory from "../runtime/realm/factories/StaticJsRealm.js";

import { compileExpression, compileProgram } from "./compilation/factories.js";
import {
  ExpressionCompilationOptions,
  ProgramCompilationOptions,
} from "./compilation/options.js";
import StaticJsParseError from "./StaticJsParseError.js";

export interface EvaluateProgramOptions extends ProgramCompilationOptions {
  realm?: StaticJsRealm;
}

export interface EvaluateExpressionOptions
  extends ExpressionCompilationOptions {
  realm?: StaticJsRealm;
}
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

  const resolvedRealm = realm ?? StaticJsRealmFactory();

  return compilation.evaluate(resolvedRealm);
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

  const resolvedRealm = realm ?? StaticJsRealmFactory();

  return compileExpression(string).evaluate(resolvedRealm);
}
