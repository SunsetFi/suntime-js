import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";

export interface StaticJsEnvironment {
  hasBindingEvaluator(name: string): EvaluationGenerator<boolean>;

  createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void>;

  createImmutableBindingEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<void>;

  createFunctionBindingEvaluator(
    name: string,
    func: StaticJsValue,
  ): EvaluationGenerator<void>;

  canDeclareGlobalVarEvaluator(name: string): EvaluationGenerator<boolean>;

  createGlobalVarBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void>;

  initializeBindingEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void>;

  setMutableBindingEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void>;

  getBindingValueEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<StaticJsValue>;

  deleteBindingEvaluator(name: string): EvaluationGenerator<void>;

  // FIXME: DOesnt change or evaluate, doesn't need to be an Evaluator.
  hasThisBindingEvaluator(): EvaluationGenerator<boolean>;

  // FIXME: DOesnt change or evaluate, doesn't need to be an Evaluator.
  hasSuperBindingEvaluator(): EvaluationGenerator<boolean>;

  // FIXME: DOesnt change or evaluate, doesn't need to be an Evaluator.
  withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue>;

  // FIXME: DOesnt change or evaluate, doesn't need to be an Evaluator.
  getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue>;

  // FIXME: DOesnt change or evaluate, doesn't need to be an Evaluator.
  getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue>;

  // FIXME: DOesnt change or evaluate, doesn't need to be an Evaluator.
  getVarScopeEvaluator(): EvaluationGenerator<StaticJsEnvironment | null>;
}
