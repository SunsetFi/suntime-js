import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsValue } from "../../types/StaticJsValue.js";

export default interface StaticJsEnvironmentBinding {
  readonly isMutable: boolean;
  readonly isInitialized: boolean;
  readonly isDeletable: boolean;
  initialize(value: StaticJsValue): EvaluationGenerator<void>;
  get(): EvaluationGenerator<StaticJsValue>;
  set(value: StaticJsValue): EvaluationGenerator<void>;
  delete(): EvaluationGenerator<void>;
}
