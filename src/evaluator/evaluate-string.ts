import { parse, parseExpression } from "@babel/parser";

import { isStaticJsValue, StaticJsRealm } from "../runtime/internal.js";

import EvaluationContext from "./EvaluationContext.js";
import { runEvaluatorUntilCompletion } from "./evaluator-runtime.js";
import { evaluateNode } from "./node-evaluators/index.js";

/**
 * Evaluates a string as a javascript program, and returns the result.
 * @param string - The string containing javascript code to evaluate.
 * @param realm - The realm in which to evaluate the code.
 * @returns The native javascript result of evaluating the code.
 * @public
 */
export function evaluateString(string: string, realm?: StaticJsRealm): any {
  const ast = parse(string);

  if (ast.errors && ast.errors.length) {
    throw new Error(`Error parsing expression: ${ast.errors[0].code}.`);
  }

  realm ??= StaticJsRealm();

  const context: EvaluationContext = {
    realm,
    env: realm.globalEnv,
  };

  const result = runEvaluatorUntilCompletion(
    evaluateNode(ast.program, context),
  );

  if (isStaticJsValue(result)) {
    return result.toJs();
  }

  if (result) {
    throw new Error("Control flow statements are not allowed in expressions.");
  }

  return undefined;
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
): any {
  const ast = parseExpression(string);

  if (ast.errors && ast.errors.length) {
    throw new Error(`Error parsing expression: ${ast.errors[0].code}.`);
  }

  realm ??= StaticJsRealm();

  const context: EvaluationContext = {
    realm,
    env: realm.globalEnv,
  };

  const result = runEvaluatorUntilCompletion(evaluateNode(ast, context));

  if (isStaticJsValue(result)) {
    return result.toJs();
  }

  if (result) {
    throw new Error("Control flow statements are not allowed in expressions.");
  }

  return undefined;
}
