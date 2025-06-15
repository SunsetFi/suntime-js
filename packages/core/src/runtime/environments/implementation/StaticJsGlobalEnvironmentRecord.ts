import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";
import type { StaticJsEnvironment } from "../StaticJsEnvironment.js";

import StaticJsBaseEnvironmentRecord from "./StaticJsBaseEnvironmentRecord.js";
import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";
import type StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import { StaticJsEnvironmentGetBinding } from "./StaticJsEnvironmentBindingProvider.js";
import StaticJsObjectEnvironmentRecord from "./StaticJsObjectEnvironmentRecord.js";

export default class StaticJsGlobalEnvironmentRecord extends StaticJsBaseEnvironmentRecord {
  private readonly _declarativeRecord;
  private readonly _objectRecord;

  constructor(
    realm: StaticJsRealm,
    private readonly _globalThis: StaticJsValue,
    private readonly _globalObject: StaticJsObject,
  ) {
    super(realm);
    this._declarativeRecord = new StaticJsDeclarativeEnvironmentRecord(realm);
    this._objectRecord = new StaticJsObjectEnvironmentRecord(
      realm,
      _globalObject,
    );
  }

  *createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void> {
    // Both need to be checked first
    if (yield* this.hasBindingEvaluator(name)) {
      throw new ThrowCompletion(
        this.realm.types.error(
          "SyntaxError",
          `Identifier ${name} has already been declared`,
        ),
      );
    }

    return yield* this._declarativeRecord.createMutableBindingEvaluator(
      name,
      deletable,
    );
  }

  *createImmutableBindingEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<void> {
    // Both need to be checked first
    if (yield* this.hasBindingEvaluator(name)) {
      throw new ThrowCompletion(
        this.realm.types.error(
          "SyntaxError",
          `Identifier ${name} has already been declared`,
        ),
      );
    }

    yield* this._declarativeRecord.createImmutableBindingEvaluator(
      name,
      strict,
    );
  }

  *createFunctionBindingEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    yield* this._objectRecord.createMutableBindingEvaluator(name, false);
    yield* this._objectRecord.setMutableBindingEvaluator(name, value, true);
  }

  *canDeclareGlobalVarEvaluator(name: string): EvaluationGenerator<boolean> {
    if (!this._globalObject.extensible) {
      return false;
    }

    return !(yield* this._declarativeRecord.hasBindingEvaluator(name));
  }

  *createGlobalVarBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void> {
    if (!(yield* this.canDeclareGlobalVarEvaluator(name))) {
      return;
    }

    yield* this._objectRecord.createMutableBindingEvaluator(name, deletable);
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return true;
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._globalThis;
  }

  *getVarScopeEvaluator(): EvaluationGenerator<StaticJsEnvironment> {
    return this;
  }

  [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined {
    return (
      this._declarativeRecord[StaticJsEnvironmentGetBinding](name) ??
      this._objectRecord[StaticJsEnvironmentGetBinding](name)
    );
  }
}
