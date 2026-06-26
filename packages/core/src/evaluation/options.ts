import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsTaskRunner } from "#tasks/StaticJsTaskRunner.js";

export interface EvaluationOptions {
  realm?: StaticJsRealm;
  runTask?: StaticJsTaskRunner;
  sourceName?: string;
}
