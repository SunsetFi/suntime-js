import StaticJsEnvironmentImplementation from "../runtime/environments/interfaces/StaticJsEnvironmentImplementation.js";
import StaticJsRealmImplementation from "../runtime/realm/interfaces/StaticJsRealmImplementation.js";

export default interface EvaluationContext {
  env: StaticJsEnvironmentImplementation;
  realm: StaticJsRealmImplementation;
  label: string | null;
}
