import type { EvaluationOptions } from "./options.js";

import StaticJsRealm from "../../runtime/realm/factories/StaticJsRealm.js";
import { isStaticJsRealm } from "../../runtime/realm/StaticJsRealm.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import StaticJsRuntimeError from "../../errors/StaticJsRuntimeError.js";
import StaticJsSyntaxError from "../../errors/StaticJsSyntaxError.js";

/**
 * Evaluates a string as a javascript program, and returns the result.
 * @param script The string containing javascript code to evaluate.
 * @param opts The options for the evaluation.
 * @param callback An optional callback to receive and process the results of the expression.  This can be used to differentiate promises returned by the expression from the promise returned by this function, and to handle errors without throwing them.
 * @returns The native javascript result of evaluating the code.
 * @public
 */
export async function evaluateScript(
  script: string,
  opts?: EvaluationOptions,
  callback?: (value: unknown, error?: unknown) => Promise<unknown> | void,
): Promise<unknown> {
  opts ??= {};
  let { realm } = opts;
  const { taskRunner } = opts;

  realm ??= StaticJsRealm();
  if (!isStaticJsRealm(realm)) {
    throw new TypeError("Provided realm is not a StaticJsRealm");
  }

  let result: StaticJsValue;
  try {
    result = await realm.evaluateScript(script, { runTask: taskRunner });
  } catch (e) {
    let error = e;
    if (error instanceof StaticJsRuntimeError) {
      error = error.thrown.toJsSync();
    } else if (error instanceof StaticJsSyntaxError) {
      error = new SyntaxError(error.message);
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

export function evaluateScriptSync(
  script: string,
  opts?: EvaluationOptions,
): unknown {
  opts ??= {};
  let { realm } = opts;
  const { taskRunner } = opts;

  realm ??= StaticJsRealm();

  try {
    const result = realm.evaluateScriptSync(script, { runTask: taskRunner });
    return result.toJsSync();
  } catch (e) {
    let error = e;

    if (error instanceof StaticJsRuntimeError) {
      error = error.thrown.toJsSync();
    } else if (error instanceof StaticJsSyntaxError) {
      error = SyntaxError(error.message);
    }

    throw error;
  }
}
