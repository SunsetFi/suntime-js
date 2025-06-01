import {
  ThrowCompletion,
  isThrowCompletion,
} from "../../../evaluator/completions/ThrowCompletion.js";
import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import { StaticJsObject } from "../../types/StaticJsObject.js";
import { StaticJsValue } from "../../types/StaticJsValue.js";
import { StaticJsEnvironment } from "../StaticJsEnvironment.js";

import StaticJsBaseEnvironmentRecord from "./StaticJsBaseEnvironmentRecord.js";
import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
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
  ): EvaluationGenerator<ThrowCompletion | void> {
    // Both need to be checked first
    if (yield* this.hasBindingEvaluator(name)) {
      return ThrowCompletion(
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
  ): EvaluationGenerator<ThrowCompletion | void> {
    // Both need to be checked first
    if (yield* this.hasBindingEvaluator(name)) {
      return ThrowCompletion(
        this.realm.types.error(
          "SyntaxError",
          `Identifier ${name} has already been declared`,
        ),
      );
    }

    const result =
      yield* this._declarativeRecord.createImmutableBindingEvaluator(
        name,
        strict,
      );
    if (isThrowCompletion(result)) {
      return result;
    }
  }

  *createFunctionBindingEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<ThrowCompletion | void> {
    const result = yield* this._objectRecord.createMutableBindingEvaluator(
      name,
      false,
    );
    if (isThrowCompletion(result)) {
      return result;
    }
    yield* this._objectRecord.setMutableBindingEvaluator(name, value, true);
  }

  *canDeclareGlobalVarEvaluator(name: string): EvaluationGenerator<boolean> {
    console.log("canDeclareGlobalVarEvaluator", name);
    if (!this._globalObject.extensible) {
      return false;
    }

    return !(yield* this._declarativeRecord.hasBindingEvaluator(name));
  }

  *createGlobalVarBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void> {
    console.log("createGlobalVarBindingEvaluator", name, deletable);
    if (!(yield* this.canDeclareGlobalVarEvaluator(name))) {
      return;
    }

    const result = yield* this._objectRecord.createMutableBindingEvaluator(
      name,
      deletable,
    );
    if (isThrowCompletion(result)) {
      return result;
    }
  }

  hasThisBinding(): boolean {
    return true;
  }

  getThisBinding(): StaticJsValue {
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
