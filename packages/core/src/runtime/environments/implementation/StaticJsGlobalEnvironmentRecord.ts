import {
  ThrowCompletion,
  isThrowCompletion,
} from "../../../evaluator/completions/ThrowCompletion.js";
import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import StaticJsRuntimeError from "../../../evaluator/StaticJsRuntimeError.js";

import StaticJsRealmImplementation from "../../realm/interfaces/StaticJsRealmImplementation.js";

import { StaticJsObject } from "../../types/interfaces/StaticJsObject.js";
import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import StaticJsEnvironment from "../interfaces/StaticJsEnvironment.js";
import StaticJsEnvironmentImplementation from "../interfaces/StaticJsEnvironmentImplementation.js";

import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import StaticJsEnvironmentBindingProvider, {
  StaticJsEnvironmentGetBinding,
} from "./StaticJsEnvironmentBindingProvider.js";
import StaticJsObjectEnvironmentRecord from "./StaticJsObjectEnvironmentRecord.js";

export default class StaticJsGlobalEnvironmentRecord
  implements
    StaticJsEnvironment,
    StaticJsEnvironmentImplementation,
    StaticJsEnvironmentBindingProvider
{
  private readonly _declarativeRecord;
  private readonly _objectRecord;

  constructor(
    private readonly _realm: StaticJsRealmImplementation,
    private readonly _globalThis: StaticJsValue,
    private readonly _globalObject: StaticJsObject,
  ) {
    this._declarativeRecord = new StaticJsDeclarativeEnvironmentRecord(
      this._realm,
    );
    this._objectRecord = new StaticJsObjectEnvironmentRecord(
      this._realm,
      _globalObject,
    );
  }

  // TODO: `var` declarations are handled specially, probably hoist, and should go on the globalObject
  // https://tc39.es/ecma262/#sec-createglobalvarbinding

  async hasBinding(name: string) {
    const result = await this._realm.invokeEvaluator(this.hasBindingEvaluator(name));
    if (isThrowCompletion(result)) {
      throw new StaticJsRuntimeError(result.value);
    }
    return result;
  }

  *hasBindingEvaluator(name: string) {
    const declarativeHas =
      yield* this._declarativeRecord.hasBindingEvaluator(name);
    if (isThrowCompletion(declarativeHas)) {
      return declarativeHas;
    }

    if (declarativeHas === true) {
      return true;
    }

    return yield* this._objectRecord.hasBindingEvaluator(name);
  }

  async createMutableBinding(name: string, deletable: boolean) {
    const result = await this._realm.invokeEvaluator(
      this.createMutableBindingEvaluator(name, deletable),
    );
    if (isThrowCompletion(result)) {
      throw new StaticJsRuntimeError(result.value);
    }
  }

  *createMutableBindingEvaluator(name: string, deletable: boolean) {
    // Both need to be checked first
    if (yield* this.hasBindingEvaluator(name)) {
      return ThrowCompletion(
        this._realm.types.error(
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

  async createImmutableBinding(name: string, strict: boolean) {
    return await this._realm.invokeEvaluator(
      this.createImmutableBindingEvaluator(name, strict),
    );
  }

  *createImmutableBindingEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<void> {
    // Both need to be checked first
    if (yield* this.hasBindingEvaluator(name)) {
      throw new Error(`Cannot create binding ${name}: Binding already exists.`);
    }

    yield* this._declarativeRecord.createImmutableBindingEvaluator(
      name,
      strict,
    );
  }

  *createFunctionBindingEvaluator(name: string, value: StaticJsValue) {
    const result = yield* this._objectRecord.createMutableBindingEvaluator(
      name,
      false,
    );
    if (isThrowCompletion(result)) {
      throw new StaticJsRuntimeError(result.value);
    }
    yield* this._objectRecord.setMutableBindingEvaluator(name, value, true);
  }

  *canDeclareGlobalVarEvaluator(name: string): EvaluationGenerator<boolean> {
    // TODO: Is our global object extensible?
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

    const result = yield* this._objectRecord.createMutableBindingEvaluator(
      name,
      deletable,
    );
    if (isThrowCompletion(result)) {
      throw new StaticJsRuntimeError(result.value);
    }
  }

  async initializeBinding(name: string, value: StaticJsValue) {
    return await this._realm.invokeEvaluator(
      this.initializeBindingEvaluator(name, value),
    );
  }

  *initializeBindingEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    const binding =
      this._declarativeRecord[StaticJsEnvironmentGetBinding](name) ??
      this._objectRecord[StaticJsEnvironmentGetBinding](name);
    if (!binding) {
      throw new Error(
        `Cannot initialize binding ${name}: Binding does not exist.`,
      );
    }

    if (binding.isInitialized) {
      throw new Error(
        `Cannot initialize binding ${name}: Binding is already initialized.`,
      );
    }

    yield* binding.initialize(value);
  }

  async setMutableBinding(name: string, value: StaticJsValue, strict: boolean) {
    return await this._realm.invokeEvaluator(
      this.setMutableBindingEvaluator(name, value, strict),
    );
  }

  *setMutableBindingEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void> {
    let binding =
      this._declarativeRecord[StaticJsEnvironmentGetBinding](name) ??
      this._objectRecord[StaticJsEnvironmentGetBinding](name);

    if (!binding) {
      if (strict) {
        throw new StaticJsRuntimeError(
          this._realm.types.error(
            "ReferenceError",
            `Assignment to undeclared variable '${name}'.`,
          ),
        );
      }

      const result = yield* this._objectRecord.createMutableBindingEvaluator(
        name,
        true,
      );
      if (isThrowCompletion(result)) {
        throw new StaticJsRuntimeError(result.value);
      }
      binding = this._objectRecord[StaticJsEnvironmentGetBinding](name)!;
    }

    if (!binding.isMutable) {
      if (strict) {
        throw new StaticJsRuntimeError(
          this._realm.types.error(
            "TypeError",
            "Assignment to constant variable.",
          ),
        );
      }

      return;
    }

    yield* binding.set(value);
  }

  async getBindingValue(name: string) {
    return this._realm.invokeEvaluator(this.getBindingValueEvaluator(name));
  }

  *getBindingValueEvaluator(name: string): EvaluationGenerator<StaticJsValue> {
    const binding =
      this._declarativeRecord[StaticJsEnvironmentGetBinding](name) ??
      this._objectRecord[StaticJsEnvironmentGetBinding](name);
    if (!binding) {
      throw new Error(`Cannot get binding ${name}: Binding does not exist.`);
    }

    if (!binding.isInitialized) {
      throw new ReferenceError(`Cannot access '${name} before initialization.`);
    }

    return yield* binding.get();
  }

  async deleteBinding(name: string) {
    return await this._realm.invokeEvaluator(this.deleteBindingEvaluator(name));
  }

  *deleteBindingEvaluator(name: string): EvaluationGenerator<void> {
    const binding =
      this._declarativeRecord[StaticJsEnvironmentGetBinding](name) ??
      this._objectRecord[StaticJsEnvironmentGetBinding](name);
    if (!binding) {
      throw new Error(`Cannot delete binding ${name}: Binding does not exist.`);
    }

    yield* binding.delete();
  }

  async hasThisBinding() {
    return true;
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return true;
  }

  async hasSuperBinding() {
    return false;
  }

  *hasSuperBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  async withBaseObject() {
    return this._realm.types.undefined;
  }

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  async getThisBinding() {
    return this._globalThis;
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._globalThis;
  }

  async getSuperBase() {
    return this._realm.types.undefined;
  }

  *getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  *getVarScopeEvaluator(): EvaluationGenerator<StaticJsEnvironmentImplementation | null> {
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
