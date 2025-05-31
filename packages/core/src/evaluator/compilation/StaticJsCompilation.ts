import { StaticJsRealm } from "../../runtime/realm/interfaces/StaticJsRealm.js";

export interface EvaluationOptions {
  realm?: StaticJsRealm;
}

export default interface StaticJsCompilation<
  TResult = unknown,
  TGeneratorResult = Generator<void, TResult, void>,
> {
  evaluate(opts?: EvaluationOptions): Promise<TResult>;

  // TODO: generator() to get a step-by-step evaluation generator supporting introspection for debugging.
  generator(opts?: EvaluationOptions): TGeneratorResult;
}
