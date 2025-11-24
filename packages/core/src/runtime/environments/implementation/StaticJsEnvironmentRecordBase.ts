import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsValue } from "../../types/StaticJsValue.js";

import type { StaticJsEnvironmentRecord } from "../StaticJsEnvironmentRecord.js";

export default abstract class StaticJsEnvironmentRecordBase
  implements StaticJsEnvironmentRecord
{
  constructor(private readonly _outerEnv: StaticJsEnvironmentRecord | null) {}

  get outerEnv(): StaticJsEnvironmentRecord | null {
    return this._outerEnv;
  }

  abstract hasBindingEvaluator(name: string): EvaluationGenerator<boolean>;

  abstract createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void>;

  abstract createImmutableBindingEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<void>;

  abstract isInitializedEvaluator(name: string): EvaluationGenerator<boolean>;

  abstract initializeBindingEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void>;

  abstract setMutableBindingEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void>;

  abstract getBindingValueEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<StaticJsValue>;

  abstract deleteBindingEvaluator(name: string): EvaluationGenerator<boolean>;

  // TODO: The following should only be implemented on the relevant environments.
  abstract hasThisBindingEvaluator(): EvaluationGenerator<boolean>;

  abstract hasSuperBindingEvaluator(): EvaluationGenerator<boolean>;

  abstract withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue>;

  abstract getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue>;

  abstract getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue>;
}
