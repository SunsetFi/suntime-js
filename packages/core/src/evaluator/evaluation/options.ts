import type { StaticJsRealm } from "../../runtime/realm/StaticJsRealm.js";
import type { StaticJsTaskRunner } from "../../runtime/realm/StaticJsTaskIterator.js";

export interface EvaluationOptions {
  realm?: StaticJsRealm;
  taskRunner?: StaticJsTaskRunner;
}
