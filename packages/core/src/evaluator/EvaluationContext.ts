import { StaticJsEnvironment } from "../runtime/environments/StaticJsEnvironment.js";
import { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";

export default interface EvaluationContext {
  env: StaticJsEnvironment;
  realm: StaticJsRealm;
  label: string | null;
}
