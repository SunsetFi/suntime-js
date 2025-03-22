import { StaticJsEnvironment, StaticJsRealm } from "../../runtime/index.js";

export interface NodeEvaluationContext {
  env: StaticJsEnvironment;
  realm: StaticJsRealm;
}
