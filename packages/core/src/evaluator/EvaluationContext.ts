import type { StaticJsEnvironment } from "../runtime/environments/StaticJsEnvironment.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";

export default interface EvaluationContext {
  realm: StaticJsRealm;
  env: StaticJsEnvironment;
  strict: boolean;
  label: string | null;
}
