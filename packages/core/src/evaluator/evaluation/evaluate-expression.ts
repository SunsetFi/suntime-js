import type { EvaluationOptions } from "./options.js";

import StaticJsRealm from "../../runtime/realm/factories/StaticJsRealm.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

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
  callback?: (value: unknown, error?: unknown) => Promise<unknown> | void,
): Promise<unknown> {
  opts ??= {};
  let { realm } = opts;
  const { taskRunner } = opts;

  realm ??= StaticJsRealm();

  let result: StaticJsValue;
  try {
    result = await realm.evaluateExpression(code, { runTask: taskRunner });
  } catch (e) {
    let error = e;
    if (error instanceof StaticJsRuntimeError) {
      error = error.thrown.toJsSync();
    }

    if (callback) {
      await callback(undefined, error);
      return;
    }

    throw error;
  }

  const jsValue = result.toJsSync();

  if (callback) {
    return await callback(jsValue);
  }

  return jsValue;
}
