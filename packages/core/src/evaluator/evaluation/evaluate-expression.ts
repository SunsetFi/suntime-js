import type { EvaluationOptions } from "./options.js";

import StaticJsRealm from "../../runtime/realm/factories/StaticJsRealm.js";
import StaticJsRuntimeError from "../../errors/StaticJsRuntimeError.js";

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
  opts ??= {};
  let { realm } = opts;
  const { taskRunner } = opts;

  realm ??= StaticJsRealm();

  try {
    const value = await realm.evaluateExpression(code, { runTask: taskRunner });
    return value.toJsSync();
  } catch (e) {
    if (e instanceof StaticJsRuntimeError) {
      throw e.thrown.toJsSync();
    }

    throw e;
  }
}
