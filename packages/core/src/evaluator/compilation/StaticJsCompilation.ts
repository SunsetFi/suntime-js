import { StaticJsRealm } from "../../runtime/index.js";

export interface EvaluationOptions {
  realm?: StaticJsRealm;
}

export default interface StaticJsCompilation {
  evaluate(opts?: EvaluationOptions): unknown;

  // TODO: generator() to get a step-by-step evaluation generator supporting introspection for debugging.
  generator(opts?: EvaluationOptions): Generator<void, unknown, void>;
}
