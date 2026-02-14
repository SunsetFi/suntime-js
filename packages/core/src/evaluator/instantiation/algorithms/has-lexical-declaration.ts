import type StaticJsGlobalEnvironmentRecord from "../../../runtime/environments/implementation/StaticJsGlobalEnvironmentRecord.js";

import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

export default function* hasLexicalDeclaration(
  name: string,
  env: StaticJsGlobalEnvironmentRecord,
): EvaluationGenerator<boolean> {
  const dclRec = env.declarativeRecord;
  return yield* dclRec.hasBindingEvaluator(name);
}
