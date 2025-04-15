import ThrowCompletion, {
  isThrowCompletion,
} from "../../../evaluator/completions/ThrowCompletion.js";
import {
  EvaluationGenerator,
  runEvaluatorUntilCompletion,
} from "../../../evaluator/internal.js";
import StaticJsRuntimeError from "../../../evaluator/StaticJsRuntimeError.js";
import { StaticJsRealm } from "../../realm/index.js";
import { StaticJsObject, StaticJsValue } from "../../types/index.js";

import { StaticJsEnvironment } from "../interfaces/index.js";

import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import StaticJsEnvironmentBindingProvider, {
  StaticJsEnvironmentGetBinding,
} from "./StaticJsEnvironmentBindingProvider.js";
import StaticJsObjectEnvironmentRecord from "./StaticJsObjectEnvironmentRecord.js";

export default class StaticJsGlobalEnvironmentRecord
  implements StaticJsEnvironment, StaticJsEnvironmentBindingProvider
{
  private readonly _declarativeRecord;
  private readonly _objectRecord;

  constructor(
    private readonly _realm: StaticJsRealm,
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

  hasBinding(name: string) {
    const result = runEvaluatorUntilCompletion(this.hasBindingEvaluator(name));
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

  createMutableBinding(name: string, deletable: boolean): void {
    const result = runEvaluatorUntilCompletion(
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

  createImmutableBinding(name: string): void {
    return runEvaluatorUntilCompletion(
      this.createImmutableBindingEvaluator(name),
    );
  }

  *createImmutableBindingEvaluator(name: string): EvaluationGenerator<void> {
    // Both need to be checked first
    if (yield* this.hasBindingEvaluator(name)) {
      throw new Error(`Cannot create binding ${name}: Binding already exists.`);
    }

    yield* this._declarativeRecord.createImmutableBindingEvaluator(name);
  }

  createFunctionBinding(name: string, func: StaticJsValue): void {
    return runEvaluatorUntilCompletion(
      this.createFunctionBindingEvaluator(name, func),
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

  canDeclareGlobalVar(name: string): boolean {
    return runEvaluatorUntilCompletion(this.canDeclareGlobalVarEvaluator(name));
  }

  *canDeclareGlobalVarEvaluator(name: string): EvaluationGenerator<boolean> {
    // TODO: Is our global object extensible?
    if (!this._globalObject.extensible) {
      return false;
    }

    return !(yield* this._declarativeRecord.hasBindingEvaluator(name));
  }

  createGlobalVarBinding(name: string, deletable: boolean): void {
    return runEvaluatorUntilCompletion(
      this.createGlobalVarBindingEvaluator(name, deletable),
    );
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

  initializeBinding(name: string, value: StaticJsValue): void {
    return runEvaluatorUntilCompletion(
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

  setMutableBinding(name: string, value: StaticJsValue, strict: boolean): void {
    return runEvaluatorUntilCompletion(
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
        // TODO: throw StaticJs ReferenceError
        throw new ReferenceError(
          `Assignment to undeclared variable '${name}'.`,
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
        // TODO: throw StaticJs TypeError
        throw new TypeError("Assignment to constant variable.");
      }

      return;
    }

    yield* binding.set(value);
  }

  getBindingValue(name: string): StaticJsValue {
    return runEvaluatorUntilCompletion(this.getBindingValueEvaluator(name));
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

  deleteBinding(name: string): void {
    return runEvaluatorUntilCompletion(this.deleteBindingEvaluator(name));
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

  hasThisBinding(): boolean {
    return true;
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return true;
  }

  hasSuperBinding(): boolean {
    return false;
  }

  *hasSuperBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  withBaseObject(): StaticJsValue {
    return this._realm.types.undefined;
  }

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  getThisBinding(): StaticJsValue {
    return this._globalThis;
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._globalThis;
  }

  getSuperBase(): StaticJsValue {
    return this._realm.types.undefined;
  }

  *getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  getVarScope(): StaticJsEnvironment | null {
    return this;
  }

  *getVarScopeEvaluator(): EvaluationGenerator<StaticJsEnvironment | null> {
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
