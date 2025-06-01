import {
  ThrowCompletion,
  isThrowCompletion,
} from "../../../evaluator/completions/ThrowCompletion.js";
import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { runEvaluatorUntilCompletion } from "../../../evaluator/evaluator-runtime.js";
import StaticJsRuntimeError from "../../../errors/StaticJsRuntimeError.js";

import { StaticJsRealm } from "../../realm/interfaces/StaticJsRealm.js";
import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import { StaticJsEnvironment } from "../interfaces/StaticJsEnvironment.js";

import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import StaticJsEnvironmentBindingProvider, {
  StaticJsEnvironmentGetBinding,
} from "./StaticJsEnvironmentBindingProvider.js";

export default abstract class StaticJsBaseEnvironmentRecord
  implements StaticJsEnvironment, StaticJsEnvironmentBindingProvider
{
  constructor(private readonly _realm: StaticJsRealm) {}

  get realm() {
    return this._realm;
  }

  hasBinding(name: string) {
    const result = runEvaluatorUntilCompletion(this.hasBindingEvaluator(name));
    if (isThrowCompletion(result)) {
      throw new StaticJsRuntimeError(result.value);
    }
    return result;
  }

  *hasBindingEvaluator(name: string) {
    return this[StaticJsEnvironmentGetBinding](name) !== undefined;
  }

  createMutableBinding(name: string, deletable: boolean): void {
    const result = runEvaluatorUntilCompletion(
      this.createMutableBindingEvaluator(name, deletable),
    );
    if (isThrowCompletion(result)) {
      throw new StaticJsRuntimeError(result.value);
    }
  }

  abstract createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<ThrowCompletion | void>;

  createImmutableBinding(name: string, strict: boolean): void {
    runEvaluatorUntilCompletion(
      this.createImmutableBindingEvaluator(name, strict),
    );
  }

  abstract createImmutableBindingEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<void>;

  canDeclareGlobalVar(name: string): boolean {
    return runEvaluatorUntilCompletion(this.canDeclareGlobalVarEvaluator(name));
  }

  *canDeclareGlobalVarEvaluator(_name: string): EvaluationGenerator<boolean> {
    return false;
  }

  createGlobalVarBinding(name: string, deletable: boolean): void {
    runEvaluatorUntilCompletion(
      this.createGlobalVarBindingEvaluator(name, deletable),
    );
  }

  *createGlobalVarBindingEvaluator(
    _name: string,
    _deletable: boolean,
  ): EvaluationGenerator<void> {
    throw new Error(
      "Cannot create global var binding in non-global environment.",
    );
  }

  initializeBinding(name: string, value: StaticJsValue): void {
    runEvaluatorUntilCompletion(this.initializeBindingEvaluator(name, value));
  }

  *initializeBindingEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    const binding = this[StaticJsEnvironmentGetBinding](name);

    if (binding) {
      if (binding.isInitialized) {
        throw new Error(
          `Cannot initialize binding ${name}: Binding is already initialized.`,
        );
      }

      yield* binding.initialize(value);
    } else {
      throw new Error(
        `Cannot initialize binding ${name}: Binding does not exist.`,
      );
    }
  }

  createFunctionBinding(name: string, value: StaticJsValue): void {
    runEvaluatorUntilCompletion(
      this.createFunctionBindingEvaluator(name, value),
    );
  }

  *createFunctionBindingEvaluator(name: string, value: StaticJsValue) {
    const completion = yield* this.createMutableBindingEvaluator(name, false);
    if (isThrowCompletion(completion)) {
      throw new StaticJsRuntimeError(completion.value);
    }
    yield* this.setMutableBindingEvaluator(name, value, true);
  }

  setMutableBinding(name: string, value: StaticJsValue, strict: boolean): void {
    runEvaluatorUntilCompletion(
      this.setMutableBindingEvaluator(name, value, strict),
    );
  }

  *setMutableBindingEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void> {
    const binding = this[StaticJsEnvironmentGetBinding](name);

    if (binding) {
      if (!binding.isMutable) {
        if (strict) {
          throw new StaticJsRuntimeError(
            this._realm.types.error(
              "ReferenceError",
              `Assignment to constant variable '${name}'.`,
            ),
          );
        }

        return;
      }

      yield* binding.set(value);
    } else {
      throw new StaticJsRuntimeError(
        this._realm.types.error(
          "ReferenceError",
          `Assignment to undeclared variable '${name}'.`,
        ),
      );
      throw new ReferenceError(`Assignment to undeclared variable '${name}'.`);
    }
  }

  getBindingValue(name: string, strict: boolean): StaticJsValue {
    return runEvaluatorUntilCompletion(
      this.getBindingValueEvaluator(name, strict),
    );
  }

  *getBindingValueEvaluator(
    name: string,
    _strict: boolean,
  ): EvaluationGenerator<StaticJsValue> {
    const binding = this[StaticJsEnvironmentGetBinding](name);

    if (binding) {
      return yield* binding.get();
    } else {
      throw new StaticJsRuntimeError(
        this.realm.types.error(
          "ReferenceError",
          `Cannot get binding ${name}: Binding does not exist.`,
        ),
      );
    }
  }

  deleteBinding(name: string): void {
    runEvaluatorUntilCompletion(this.deleteBindingEvaluator(name));
  }

  *deleteBindingEvaluator(name: string): EvaluationGenerator<void> {
    const binding = this[StaticJsEnvironmentGetBinding](name);

    if (binding) {
      yield* binding.delete();
    } else {
      throw new StaticJsRuntimeError(
        this.realm.types.error(
          "ReferenceError",
          `Cannot delete binding ${name}: Binding does not exist.`,
        ),
      );
    }
  }

  hasThisBinding(): boolean {
    return runEvaluatorUntilCompletion(this.hasThisBindingEvaluator());
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  hasSuperBinding(): boolean {
    return runEvaluatorUntilCompletion(this.hasSuperBindingEvaluator());
  }

  *hasSuperBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  withBaseObject(): StaticJsValue {
    return runEvaluatorUntilCompletion(this.withBaseObjectEvaluator());
  }

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this.realm.types.undefined;
  }

  getThisBinding(): StaticJsValue {
    return runEvaluatorUntilCompletion(this.getThisBindingEvaluator());
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this.realm.types.undefined;
  }

  getSuperBase() {
    return runEvaluatorUntilCompletion(this.getSuperBaseEvaluator());
  }

  *getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this.realm.types.undefined;
  }

  getVarScope(): StaticJsEnvironment | null {
    return runEvaluatorUntilCompletion(this.getVarScopeEvaluator());
  }

  *getVarScopeEvaluator(): EvaluationGenerator<StaticJsEnvironment | null> {
    return null;
  }

  abstract [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined;
}
