import StaticJsEnvironment from "../runtime/environments/interfaces/StaticJsEnvironment.js";
import { StaticJsRealm } from "../runtime/realm/interfaces/StaticJsRealm.js";

export default interface EvaluationContext {
  env: StaticJsEnvironment;
  realm: StaticJsRealm;
  label: string | null;
}
