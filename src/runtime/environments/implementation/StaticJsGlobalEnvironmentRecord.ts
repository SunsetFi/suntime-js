import {
  EvaluationGenerator,
  runEvaluatorUntilCompletion,
} from "../../../evaluator/internal.js";
import {
  StaticJsObject,
  StaticJsUndefined,
  StaticJsValue,
} from "../../types/index.js";

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
  private readonly _declarativeRecord =
    new StaticJsDeclarativeEnvironmentRecord();
  private readonly _objectRecord;

  constructor(
    private readonly _globalThis: StaticJsValue,
    private readonly _globalObject: StaticJsObject,
  ) {
    this._objectRecord = new StaticJsObjectEnvironmentRecord(_globalObject);
  }

  // TODO: `var` declarations are handled specially, probably hoist, and should go on the globalObject
  // https://tc39.es/ecma262/#sec-createglobalvarbinding

  hasBinding(name: string): boolean {
    return runEvaluatorUntilCompletion(this.hasBindingEvaluator(name));
  }

  *hasBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    if (yield* this._declarativeRecord.hasBindingEvaluator(name)) {
      return true;
    }

    return yield* this._objectRecord.hasBindingEvaluator(name);
  }

  createMutableBinding(name: string, deletable: boolean): void {
    return runEvaluatorUntilCompletion(
      this.createMutableBindingEvaluator(name, deletable),
    );
  }

  *createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void> {
    // Both need to be checked first
    if (yield* this.hasBindingEvaluator(name)) {
      throw new Error(`Cannot create binding ${name}: Binding already exists.`);
    }

    yield* this._declarativeRecord.createMutableBindingEvaluator(
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

    yield* this._objectRecord.createMutableBindingEvaluator(name, deletable);
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

    binding.initialize(value);
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

      yield* this._objectRecord.createMutableBindingEvaluator(name, true);
      binding = this._objectRecord[StaticJsEnvironmentGetBinding](name)!;
    }

    if (!binding.isMutable) {
      if (strict) {
        // TODO: throw StaticJs TypeError
        throw new TypeError("Assignment to constant variable.");
      }

      return;
    }

    binding.value = value;
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

    return binding.value;
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

    binding.delete();
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
    return StaticJsUndefined();
  }

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    return StaticJsUndefined();
  }

  getThisBinding(): StaticJsValue {
    return this._globalThis;
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._globalThis;
  }

  getSuperBase(): StaticJsValue {
    return StaticJsUndefined();
  }

  *getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue> {
    return StaticJsUndefined();
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
