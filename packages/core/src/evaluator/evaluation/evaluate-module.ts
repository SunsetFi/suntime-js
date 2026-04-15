import type { StaticJsModule } from "../../runtime/modules/StaticJsModule.js";
import type { EvaluationOptions } from "./options.js";

import { StaticJsRuntimeError } from "../../errors/StaticJsRuntimeError.js";
import { StaticJsSyntaxError } from "../../errors/StaticJsSyntaxError.js";
import { StaticJsRealm } from "../../runtime/realm/factories/StaticJsRealm.js";
import { isStaticJsRealm } from "../../runtime/realm/StaticJsRealm.js";
import { dropUndefined } from "../../utils/drop-undefined.js";

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
  const { taskRunner, sourceName } = opts;

  realm ??= StaticJsRealm();
  if (!isStaticJsRealm(realm)) {
    throw new TypeError("Provided realm is not a StaticJsRealm");
  }

  const evalOpts = dropUndefined({ runTask: taskRunner, sourceName });

  try {
    return await realm.evaluateModule(code, evalOpts);
  } catch (e) {
    let error = e;

    if (error instanceof StaticJsRuntimeError) {
      error = error.thrown.toNative();
    } else if (error instanceof StaticJsSyntaxError) {
      const syntaxError = new SyntaxError(error.message);
      syntaxError.cause = error;
      error = syntaxError;
    }

    throw error;
  }
}
