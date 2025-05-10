import {
  EvaluationGenerator,
  ThrowCompletion,
} from "../../../evaluator/internal.js";
import StaticJsRuntimeError from "../../../evaluator/StaticJsRuntimeError.js";
import { StaticJsRealm } from "../../realm/index.js";

import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import StaticJsBaseEnvironmentRecord from "./StaticJsBaseEnvironment.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import { StaticJsEnvironmentGetBinding } from "./StaticJsEnvironmentBindingProvider.js";

export default class StaticJsDeclarativeEnvironmentRecord extends StaticJsBaseEnvironmentRecord {
  private readonly _bindings: Map<string, DeclarativeEnvironmentBinding> =
    new Map();

  *createMutableBindingEvaluator(name: string, deletable: boolean) {
    if (deletable) {
      // FIXME: Use a throw completion?
      throw new Error(
        "Bindings in declarative environments cannot be deletable.",
      );
    }

    if (this._bindings.has(name)) {
      return ThrowCompletion(
        this.realm.types.error(
          "SyntaxError",
          `Identifier ${name} has already been declared`,
        ),
      );
    }

    this._bindings.set(
      name,
      new DeclarativeEnvironmentBinding(name, true, null, this.realm),
    );
  }

  *createImmutableBindingEvaluator(
    name: string,
    _strict: boolean,
  ): EvaluationGenerator<void> {
    if (this._bindings.has(name)) {
      // FIXME: Strict probably means we should or should not throw here.
      throw new StaticJsRuntimeError(
        this.realm.types.error(
          "SyntaxError",
          `Identifier ${name} has already been declared`,
        ),
      );
    }

    this._bindings.set(
      name,
      new DeclarativeEnvironmentBinding(name, false, null, this.realm),
    );
  }

  [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined {
    return this._bindings.get(name);
  }
}

class DeclarativeEnvironmentBinding implements StaticJsEnvironmentBinding {
  private _value: StaticJsValue | null;

  constructor(
    public readonly name: string,
    public readonly isMutable: boolean,
    value: StaticJsValue | null,
    private readonly realm: StaticJsRealm,
  ) {
    this._value = value;
  }

  get isInitialized(): boolean {
    return this._value !== null;
  }

  get isDeletable(): boolean {
    return false;
  }

  *initialize(value: StaticJsValue): EvaluationGenerator<void> {
    if (this.isInitialized) {
      throw new Error(
        `Cannot initialize binding ${this.name}: Already initialized`,
      );
    }

    this._value = value;
  }

  *get(): EvaluationGenerator<StaticJsValue> {
    if (this._value == null) {
      throw new StaticJsRuntimeError(
        this.realm.types.error(
          "ReferenceError",
          `Cannot get value of uninitialized binding ${this.name}`,
        ),
      );
    }

    return this._value;
  }

  *set(value: StaticJsValue): EvaluationGenerator<void> {
    if (!this.isMutable) {
      throw new Error(`Cannot set value of immutable binding ${this.name}`);
    }

    this._value = value;
  }

  *delete(): EvaluationGenerator<void> {
    throw new Error("Cannot delete bindings in declarative environments");
  }
}
