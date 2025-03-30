import { EvaluationGenerator } from "../../../evaluator/internal.js";
import { StaticJsValue } from "../../types/index.js";

import { StaticJsEnvironment } from "../interfaces/index.js";

import StaticJsBaseEnvironment from "./StaticJsBaseEnvironmentRecord.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import StaticJsEnvironmentBindingProvider, {
  isStaticJsEnvironmentBindingProvider,
  StaticJsEnvironmentGetBinding,
} from "./StaticJsEnvironmentBindingProvider.js";

export default class StaticJsLexicalEnvironment extends StaticJsBaseEnvironment {
  private readonly _record: StaticJsEnvironment &
    StaticJsEnvironmentBindingProvider;
  private readonly _parent:
    | (StaticJsEnvironment & StaticJsEnvironmentBindingProvider)
    | null;

  constructor(record: StaticJsEnvironment, parent: StaticJsEnvironment | null) {
    super();

    // FIXME: We use getBinding as an implementation optimization but I don't want to expose it.
    // I'm too overwhelmed to figure out what to do about this right now.

    if (!isStaticJsEnvironmentBindingProvider(record)) {
      throw new Error("Invalid record.");
    }

    if (!isStaticJsEnvironmentBindingProvider(parent)) {
      throw new Error("Invalid parent.");
    }

    this._record = record;
    this._parent = parent;
  }

  *createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void> {
    yield* this._record.createMutableBindingEvaluator(name, deletable);
  }

  *createImmutableBindingEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<void> {
    yield* this._record.createImmutableBindingEvaluator(name, strict);
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return yield* this._record.hasThisBindingEvaluator();
  }

  *hasSuperBindingEvaluator(): EvaluationGenerator<boolean> {
    return yield* this._record.hasSuperBindingEvaluator();
  }

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    return yield* this._record.withBaseObjectEvaluator();
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return yield* this._record.getThisBindingEvaluator();
  }

  *getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue> {
    return yield* this._record.getSuperBaseEvaluator();
  }

  *getVarScopeEvaluator(): EvaluationGenerator<StaticJsEnvironment | null> {
    const recordScope = yield* this._record.getVarScopeEvaluator();
    if (recordScope) {
      return recordScope;
    }
    if (this._parent) {
      return yield* this._parent.getVarScopeEvaluator();
    }

    return null;
  }

  [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined {
    return (
      this._record[StaticJsEnvironmentGetBinding](name) ??
      this._parent?.[StaticJsEnvironmentGetBinding](name)
    );
  }
}
