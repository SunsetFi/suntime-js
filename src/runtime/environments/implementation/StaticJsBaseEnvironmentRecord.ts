import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { runEvaluatorUntilCompletion } from "../../../evaluator/evaluator-runtime.js";
import StaticJsUndefined from "../../types/factories/StaticJsUndefined.js";
import { StaticJsValue } from "../../types/index.js";

import { StaticJsEnvironment } from "../interfaces/index.js";

import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import StaticJsEnvironmentBindingProvider, {
  StaticJsEnvironmentGetBinding,
} from "./StaticJsEnvironmentBindingProvider.js";

export default abstract class StaticJsBaseEnvironment
  implements StaticJsEnvironment, StaticJsEnvironmentBindingProvider
{
  constructor() {}

  hasBinding(name: string): boolean {
    return runEvaluatorUntilCompletion(this.hasBindingEvaluator(name));
  }

  *hasBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    return this[StaticJsEnvironmentGetBinding](name) !== undefined;
  }

  createMutableBinding(name: string, deletable: boolean): void {
    runEvaluatorUntilCompletion(
      this.createMutableBindingEvaluator(name, deletable),
    );
  }

  abstract createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void>;

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

      binding.initialize(value);
    } else {
      throw new Error(
        `Cannot initialize binding ${name}: Binding does not exist.`,
      );
    }
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
          throw new ReferenceError("Assignment to constant variable.");
        }

        return;
      }

      binding.value = value;
    } else {
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
      return binding.value;
    } else {
      // TODO: Throw StaticJs ReferenceError
      throw new Error(`Cannot get binding ${name}: Binding does not exist.`);
    }
  }

  deleteBinding(name: string): void {
    runEvaluatorUntilCompletion(this.deleteBindingEvaluator(name));
  }

  *deleteBindingEvaluator(name: string): EvaluationGenerator<void> {
    const binding = this[StaticJsEnvironmentGetBinding](name);

    if (binding) {
      binding.delete();
    } else {
      throw new Error(`Cannot delete binding ${name}: Binding does not exist.`);
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
    return StaticJsUndefined();
  }

  getThisBinding(): StaticJsValue {
    return runEvaluatorUntilCompletion(this.getThisBindingEvaluator());
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return StaticJsUndefined();
  }

  getSuperBase() {
    return runEvaluatorUntilCompletion(this.getSuperBaseEvaluator());
  }

  *getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue> {
    return StaticJsUndefined();
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
