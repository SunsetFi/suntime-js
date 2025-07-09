import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

import type { StaticJsEnvironment } from "../StaticJsEnvironment.js";
import StaticJsBaseEnvironment from "./StaticJsBaseEnvironmentRecord.js";
import type StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import type StaticJsEnvironmentBindingProvider from "./StaticJsEnvironmentBindingProvider.js";
import {
  environmentToBindingProvider,
  StaticJsEnvironmentGetBinding,
} from "./StaticJsEnvironmentBindingProvider.js";

export default class StaticJsLexicalEnvironment extends StaticJsBaseEnvironment {
  private readonly _record: StaticJsEnvironment &
    StaticJsEnvironmentBindingProvider;
  private readonly _parent:
    | (StaticJsEnvironment & StaticJsEnvironmentBindingProvider)
    | null;

  constructor(
    realm: StaticJsRealm,
    record: StaticJsEnvironment,
    parent: StaticJsEnvironment | null,
  ) {
    super(realm);

    this._record = environmentToBindingProvider(record);
    this._parent = parent ? environmentToBindingProvider(parent) : null;
  }

  *createMutableBindingEvaluator(name: string, deletable: boolean) {
    yield* this._record.createMutableBindingEvaluator(name, deletable);
  }

  *createImmutableBindingEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<void> {
    yield* this._record.createImmutableBindingEvaluator(name, strict);
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    if (yield* this._record.hasThisBindingEvaluator()) {
      return true;
    }

    if (this._parent) {
      return yield* this._parent.hasThisBindingEvaluator();
    }

    return false;
  }

  *hasSuperBindingEvaluator(): EvaluationGenerator<boolean> {
    return yield* this._record.hasSuperBindingEvaluator();
  }

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    return yield* this._record.withBaseObjectEvaluator();
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    if (yield* this._record.hasThisBindingEvaluator()) {
      return yield* this._record.getThisBindingEvaluator();
    }

    if (this._parent) {
      return yield* this._parent.getThisBindingEvaluator();
    }

    return this.realm.types.undefined;
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

  *[StaticJsEnvironmentGetBinding](
    name: string,
  ): EvaluationGenerator<StaticJsEnvironmentBinding | undefined> {
    const recordValue =
      yield* this._record[StaticJsEnvironmentGetBinding](name);
    if (recordValue) {
      return recordValue;
    }

    if (this._parent) {
      return yield* this._parent[StaticJsEnvironmentGetBinding](name);
    }

    return undefined;
  }
}
