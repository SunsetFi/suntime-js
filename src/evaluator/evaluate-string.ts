import { parse, parseExpression } from "@babel/parser";

import { StaticJsRealm } from "../runtime/index.js";

import { compileExpression, compileProgram } from "./compilation/factories.js";

/**
 * Evaluates a string as a javascript program, and returns the result.
 * @param string - The string containing javascript code to evaluate.
 * @param realm - The realm in which to evaluate the code.
 * @returns The native javascript result of evaluating the code.
 * @public
 */
export function evaluateString(string: string, realm?: StaticJsRealm): unknown {
  const ast = parse(string);

  if (ast.errors && ast.errors.length) {
    throw new Error(`Error parsing expression: ${ast.errors[0].code}.`);
  }

  realm ??= StaticJsRealm();

  return compileProgram(string).evaluate(realm);
}

/**
 * Evaluates a string as a javascript expression, and returns the result.
 * @param string - The string containing javascript expression to evaluate.
 * @param realm - The realm in which to evaluate the expression.
 * @returns The native javascript result of evaluating the code.
 * @public
 */
export function evaluateExpressionString(
  string: string,
  realm?: StaticJsRealm,
): unknown {
  const ast = parseExpression(string);

  if (ast.errors && ast.errors.length) {
    throw new Error(`Error parsing expression: ${ast.errors[0].code}.`);
  }

  realm ??= StaticJsRealm();

  return compileExpression(string).evaluate(realm);
}
