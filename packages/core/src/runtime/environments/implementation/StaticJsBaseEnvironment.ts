import {
  ThrowCompletion,
  isThrowCompletion,
} from "../../../evaluator/completions/ThrowCompletion.js";
import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import StaticJsRuntimeError from "../../../evaluator/StaticJsRuntimeError.js";

import StaticJsRealmImplementation from "../../realm/interfaces/StaticJsRealmImplementation.js";
import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import StaticJsEnvironment from "../interfaces/StaticJsEnvironment.js";
import StaticJsEnvironmentImplementation from "../interfaces/StaticJsEnvironmentImplementation.js";

import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import StaticJsEnvironmentBindingProvider, {
  StaticJsEnvironmentGetBinding,
} from "./StaticJsEnvironmentBindingProvider.js";

export default abstract class StaticJsBaseEnvironmentRecord
  implements
    StaticJsEnvironment,
    StaticJsEnvironmentImplementation,
    StaticJsEnvironmentBindingProvider
{
  constructor(private readonly _realm: StaticJsRealmImplementation) {}

  get realm() {
    return this._realm;
  }

  async hasBinding(name: string) {
    const result = await this._realm.invokeEvaluator(
      this.hasBindingEvaluator(name),
    );
    if (isThrowCompletion(result)) {
      throw new StaticJsRuntimeError(result.value);
    }
    return result;
  }

  *hasBindingEvaluator(name: string) {
    return this[StaticJsEnvironmentGetBinding](name) !== undefined;
  }

  async createMutableBinding(name: string, deletable: boolean) {
    const result = await this._realm.invokeEvaluator(
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

  async createImmutableBinding(name: string, strict: boolean) {
    await this._realm.invokeEvaluator(
      this.createImmutableBindingEvaluator(name, strict),
    );
  }

  abstract createImmutableBindingEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<void>;

  *canDeclareGlobalVarEvaluator(_name: string): EvaluationGenerator<boolean> {
    return false;
  }

  *createGlobalVarBindingEvaluator(
    _name: string,
    _deletable: boolean,
  ): EvaluationGenerator<void> {
    throw new Error(
      "Cannot create global var binding in non-global environment.",
    );
  }

  async initializeBinding(name: string, value: StaticJsValue) {
    await this._realm.invokeEvaluator(
      this.initializeBindingEvaluator(name, value),
    );
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

  *createFunctionBindingEvaluator(name: string, value: StaticJsValue) {
    const completion = yield* this.createMutableBindingEvaluator(name, false);
    if (isThrowCompletion(completion)) {
      throw new StaticJsRuntimeError(completion.value);
    }
    yield* this.setMutableBindingEvaluator(name, value, true);
  }

  async setMutableBinding(name: string, value: StaticJsValue, strict: boolean) {
    await this._realm.invokeEvaluator(
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

  async getBindingValue(name: string, strict: boolean) {
    return await this._realm.invokeEvaluator(
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

  async deleteBinding(name: string) {
    await this._realm.invokeEvaluator(this.deleteBindingEvaluator(name));
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

  async hasThisBinding() {
    return await this._realm.invokeEvaluator(this.hasThisBindingEvaluator());
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  async hasSuperBinding() {
    return await this._realm.invokeEvaluator(this.hasSuperBindingEvaluator());
  }

  *hasSuperBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  async withBaseObject() {
    return await this._realm.invokeEvaluator(this.withBaseObjectEvaluator());
  }

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this.realm.types.undefined;
  }

  async getThisBinding() {
    return this._realm.invokeEvaluator(this.getThisBindingEvaluator());
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this.realm.types.undefined;
  }

  async getSuperBase() {
    return await this._realm.invokeEvaluator(this.getSuperBaseEvaluator());
  }

  *getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this.realm.types.undefined;
  }

  *getVarScopeEvaluator(): EvaluationGenerator<StaticJsEnvironmentImplementation | null> {
    return null;
  }

  abstract [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined;
}
