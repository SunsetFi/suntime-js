import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";

export interface StaticJsEnvironmentRecord {
  get outerEnv(): StaticJsEnvironmentRecord | null;

  hasBindingEvaluator(name: string): EvaluationGenerator<boolean>;

  createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void>;

  createImmutableBindingEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<void>;

  isInitializedEvaluator(name: string): EvaluationGenerator<boolean>;

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

  deleteBindingEvaluator(name: string): EvaluationGenerator<boolean>;

  // TODO: The following should only be implemented on the relevant environments.
  hasThisBindingEvaluator(): EvaluationGenerator<boolean>;

  hasSuperBindingEvaluator(): EvaluationGenerator<boolean>;

  withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue>;

  getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue>;

  getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue>;
}
