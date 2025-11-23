import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

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

  *setMutableBindingEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void> {
    // FIXME: Theres a whole reference thing we aren't doing which should be taking care of this (ResolveBinding, GetValue, PutValue).

    const binding = yield* this[StaticJsEnvironmentGetBinding](name);

    if (binding) {
      if (!binding.isMutable) {
        if (strict) {
          throw new ThrowCompletion(
            this.realm.types.error(
              "TypeError",
              `Assignment to constant variable '${name}'.`,
            ),
          );
        }

        return;
      }

      yield* binding.set(value);
      return;
    }

    if (strict) {
      throw new ThrowCompletion(
        this.realm.types.error(
          "ReferenceError",
          `Assignment to undeclared variable '${name}'.`,
        ),
      );
    }

    yield* this._globalObject.definePropertyEvaluator(name, {
      value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }

  *createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
    isVarDecl: boolean,
  ): EvaluationGenerator<void> {
    yield* this._ensureBindingNotDeclared(name);

    return yield* this._declarativeRecord.createMutableBindingEvaluator(
      name,
      deletable,
      isVarDecl,
    );
  }

  *createImmutableBindingEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<void> {
    yield* this._ensureBindingNotDeclared(name);

    yield* this._declarativeRecord.createImmutableBindingEvaluator(
      name,
      strict,
    );
  }

  *createFunctionBindingEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    yield* this._objectRecord.createMutableBindingEvaluator(name, false, false);
    yield* this._objectRecord.setMutableBindingEvaluator(name, value, true);
  }

  *canDeclareGlobalVarEvaluator(name: string): EvaluationGenerator<boolean> {
    if (!this._globalObject.extensible) {
      return false;
    }

    if (yield* this._globalObject.hasPropertyEvaluator(name)) {
      return true;
    }

    return this._globalObject.extensible;
  }

  *createGlobalVarBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void> {
    const hasProperty = yield* this._globalObject.hasPropertyEvaluator(name);
    const extensible = this._globalObject.extensible;

    if (!hasProperty && extensible) {
      yield* this._objectRecord.createMutableBindingEvaluator(
        name,
        deletable,
        true,
      );
      yield* this._objectRecord.initializeBindingEvaluator(
        name,
        this.realm.types.undefined,
      );
    }
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return true;
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._globalThis;
  }

  *[StaticJsEnvironmentGetBinding](
    name: string,
  ): EvaluationGenerator<StaticJsEnvironmentBinding | undefined> {
    const declarativeValue =
      yield* this._declarativeRecord[StaticJsEnvironmentGetBinding](name);
    if (declarativeValue) {
      return declarativeValue;
    }

    return yield* this._objectRecord[StaticJsEnvironmentGetBinding](name);
  }

  private *_ensureBindingNotDeclared(name: string): EvaluationGenerator<void> {
    if (yield* this.hasBindingEvaluator(name)) {
      throw new ThrowCompletion(
        this.realm.types.error(
          "SyntaxError",
          `Identifier ${name} has already been declared`,
        ),
      );
    }
  }
}
