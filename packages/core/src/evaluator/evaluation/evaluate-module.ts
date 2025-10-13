import type { EvaluationOptions } from "./options.js";

import StaticJsRealm from "../../runtime/realm/factories/StaticJsRealm.js";
import type { StaticJsModule } from "../../runtime/modules/StaticJsModule.js";

import StaticJsRuntimeError from "../../errors/StaticJsRuntimeError.js";
import StaticJsSyntaxError from "../../errors/StaticJsSyntaxError.js";

/**
 * Evaluates a string as a javascript program, and returns the result.
 * @param code - The string containing javascript code to evaluate.
 * @param opts - The options for the evaluation.
 * @returns The native javascript result of evaluating the code.
 * @public
 */
export async function evaluateModule(
  code: string,
  opts?: EvaluationOptions,
): Promise<StaticJsModule> {
  opts ??= {};
  let { realm } = opts;
  const { taskRunner } = opts;

  realm ??= StaticJsRealm();

  try {
    return await realm.evaluateModule(code, { runTask: taskRunner });
  } catch (e) {
    let error = e;

    if (error instanceof StaticJsRuntimeError) {
      error = error.thrown.toJsSync();
    } else if (error instanceof StaticJsSyntaxError) {
      throw new SyntaxError(error.message);
    }

    throw error;
  }
}
