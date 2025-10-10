import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../../types/StaticJsValue.js";

import StaticJsBaseEnvironmentRecord from "./StaticJsBaseEnvironmentRecord.js";
import type StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import { StaticJsEnvironmentGetBinding } from "./StaticJsEnvironmentBindingProvider.js";

export default class StaticJsDeclarativeEnvironmentRecord extends StaticJsBaseEnvironmentRecord {
  private readonly _bindings: Map<string, DeclarativeEnvironmentBinding> =
    new Map();

  *createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
    isVarDecl: boolean,
  ) {
    if (deletable) {
      throw new ThrowCompletion(
        this.realm.types.error(
          "TypeError",
          "Bindings in declarative environments cannot be deletable.",
        ),
      );
    }

    // HACK: Per the spec, we need to process all var decls in a batch and dedup var decls.
    // But, we aren't set up to do that easily...
    if (isVarDecl && this._bindings.get(name)?.isVarDecl) {
      return;
    }

    this._assertBindingNotDeclared(name);

    this._bindings.set(
      name,
      new DeclarativeEnvironmentBinding(
        name,
        true,
        isVarDecl,
        null,
        this.realm,
      ),
    );
  }

  *createImmutableBindingEvaluator(
    name: string,
    _strict: boolean,
  ): EvaluationGenerator<void> {
    // TODO: Do we throw if not strict?
    this._assertBindingNotDeclared(name);

    this._bindings.set(
      name,
      new DeclarativeEnvironmentBinding(name, false, false, null, this.realm),
    );
  }

  protected _assertBindingNotDeclared(name: string) {
    if (this._bindings.has(name)) {
      throw new ThrowCompletion(
        this.realm.types.error(
          "SyntaxError",
          `Identifier ${name} has already been declared`,
        ),
      );
    }
  }

  *[StaticJsEnvironmentGetBinding](
    name: string,
  ): EvaluationGenerator<StaticJsEnvironmentBinding | undefined> {
    return this._bindings.get(name);
  }
}

class DeclarativeEnvironmentBinding implements StaticJsEnvironmentBinding {
  private _value: StaticJsValue | null;

  constructor(
    public readonly name: string,
    public readonly isMutable: boolean,
    public readonly isVarDecl: boolean,
    value: StaticJsValue | null,
    private readonly _realm: StaticJsRealm,
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
      throw new ThrowCompletion(
        this._realm.types.error(
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
