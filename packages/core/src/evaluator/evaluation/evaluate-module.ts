import type { EvaluationOptions } from "./options.js";

import StaticJsRealm from "../../runtime/realm/factories/StaticJsRealm.js";
import type { StaticJsModule } from "../../runtime/modules/StaticJsModule.js";

/**
 * Evaluates a string as a javascript program, and returns the result.
 * @param code - The string containing javascript code to evaluate.
 * @param opts - The options for the evaluation.
 * @returns The native javascript result of evaluating the code.
 * @public
 */
export function evaluateModule(
  code: string,
  opts?: EvaluationOptions,
): Promise<StaticJsModule> {
  opts ??= {};
  let { realm } = opts;
  const { taskRunner } = opts;

  realm ??= StaticJsRealm();

  return realm.evaluateModule(code, { runTask: taskRunner });
}
