import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../../types/StaticJsValue.js";

import StaticJsBaseEnvironmentRecord from "./StaticJsBaseEnvironmentRecord.js";
import type StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";
import type StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import { StaticJsEnvironmentGetBinding } from "./StaticJsEnvironmentBindingProvider.js";
import type StaticJsObjectEnvironmentRecord from "./StaticJsObjectEnvironmentRecord.js";

export default class StaticJsGlobalEnvironmentRecord extends StaticJsBaseEnvironmentRecord {
  constructor(
    realm: StaticJsRealm,
    private readonly _globalThis: StaticJsValue,
    private readonly _declarativeRecord: StaticJsDeclarativeEnvironmentRecord,
    private readonly _objectRecord: StaticJsObjectEnvironmentRecord,
  ) {
    super(realm);
  }

  get objectRecord(): StaticJsObjectEnvironmentRecord {
    return this._objectRecord;
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

    yield* this._objectRecord.bindingObject.definePropertyEvaluator(name, {
      value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }

  *createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void> {
    yield* this._ensureBindingNotDeclared(name);

    return yield* this._declarativeRecord.createMutableBindingEvaluator(
      name,
      deletable,
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
    yield* this._objectRecord.createMutableBindingEvaluator(name, false);
    yield* this._objectRecord.setMutableBindingEvaluator(name, value, true);
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
