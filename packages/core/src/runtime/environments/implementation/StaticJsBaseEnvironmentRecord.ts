import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../../types/StaticJsValue.js";

import type { StaticJsEnvironment } from "../StaticJsEnvironment.js";
import type StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import type StaticJsEnvironmentBindingProvider from "./StaticJsEnvironmentBindingProvider.js";
import { StaticJsEnvironmentGetBinding } from "./StaticJsEnvironmentBindingProvider.js";

export default abstract class StaticJsBaseEnvironmentRecord
  implements StaticJsEnvironment, StaticJsEnvironmentBindingProvider
{
  constructor(private readonly _realm: StaticJsRealm) {}

  get realm() {
    return this._realm;
  }

  *hasBindingEvaluator(name: string) {
    return this[StaticJsEnvironmentGetBinding](name) !== undefined;
  }

  abstract createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void>;

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

  *initializeBindingEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    const binding = this[StaticJsEnvironmentGetBinding](name);

    if (binding) {
      if (binding.isInitialized) {
        throw new ThrowCompletion(
          this._realm.types.error(
            "ReferenceError",
            `Cannot initialize binding ${name}: Binding is already initialized.`,
          ),
        );
      }

      yield* binding.initialize(value);
    } else {
      throw new ThrowCompletion(
        this._realm.types.error(
          "ReferenceError",
          `Cannot initialize binding ${name}: Binding does not exist.`,
        ),
      );
    }
  }

  *createFunctionBindingEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    yield* this.createMutableBindingEvaluator(name, false);
    yield* this.setMutableBindingEvaluator(name, value, true);
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
          throw new ThrowCompletion(
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
      throw new ThrowCompletion(
        this._realm.types.error(
          "ReferenceError",
          `Assignment to undeclared variable '${name}'.`,
        ),
      );
    }
  }

  *getBindingValueEvaluator(
    name: string,
    _strict: boolean,
  ): EvaluationGenerator<StaticJsValue> {
    const binding = this[StaticJsEnvironmentGetBinding](name);

    if (binding) {
      return yield* binding.get();
    } else {
      throw new ThrowCompletion(
        this.realm.types.error(
          "ReferenceError",
          `Cannot get binding ${name}: Binding does not exist.`,
        ),
      );
    }
  }

  *deleteBindingEvaluator(name: string): EvaluationGenerator<void> {
    const binding = this[StaticJsEnvironmentGetBinding](name);

    if (binding) {
      yield* binding.delete();
    } else {
      throw new ThrowCompletion(
        this.realm.types.error(
          "ReferenceError",
          `Cannot delete binding ${name}: Binding does not exist.`,
        ),
      );
    }
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  *hasSuperBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this.realm.types.undefined;
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this.realm.types.undefined;
  }

  *getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this.realm.types.undefined;
  }

  *getVarScopeEvaluator(): EvaluationGenerator<StaticJsEnvironment | null> {
    return null;
  }

  abstract [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined;
}
