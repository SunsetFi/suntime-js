import { StaticJsEnvironment, StaticJsRealm } from "../runtime/internal.js";

export default interface EvaluationContext {
  env: StaticJsEnvironment;
  realm: StaticJsRealm;
}
