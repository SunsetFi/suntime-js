import type { StaticJsEnvironment } from "../runtime/environments/StaticJsEnvironment.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";

export default interface EvaluationContext {
  env: StaticJsEnvironment;
  realm: StaticJsRealm;
  label: string | null;
}
