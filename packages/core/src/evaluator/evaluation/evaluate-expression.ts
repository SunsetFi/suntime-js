import type { EvaluationOptions } from "./options.js";

import StaticJsRealm from "../../runtime/realm/factories/StaticJsRealm.js";

/**
 * Evaluates a string as a javascript program, and returns the result.
 * @param code - The string containing javascript code to evaluate.
 * @param opts - The options for the evaluation.
 * @returns The native javascript result of evaluating the code.
 * @public
 */
export async function evaluateExpression(
  code: string,
  opts?: EvaluationOptions,
): Promise<unknown> {
  let { realm } = opts ?? {};

  realm ??= StaticJsRealm();

  const value = await realm.evaluateExpression(code);
  return value.toJsSync();
}
