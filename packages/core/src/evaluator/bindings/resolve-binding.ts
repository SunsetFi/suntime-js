import { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";
import getIdentifierReference from "../../runtime/references/get-identifier-reference.js";
import { EvaluationContext } from "../EvaluationContext.js";

export function* resolveBinding(name: string, env?: StaticJsEnvironmentRecord | null | undefined) {
  if (!env) {
    env = EvaluationContext.current.lexicalEnv;
  }

  return yield* getIdentifierReference(env, name, EvaluationContext.current.strict);
}
