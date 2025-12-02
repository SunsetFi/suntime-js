import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../../types/StaticJsValue.js";

import type { StaticJsEnvironmentRecord } from "../StaticJsEnvironmentRecord.js";

import StaticJsEnvironmentRecordBase from "./StaticJsEnvironmentRecordBase.js";

export default class StaticJsDeclarativeEnvironmentRecord extends StaticJsEnvironmentRecordBase {
  static from(context: EvaluationContext) {
    return new StaticJsDeclarativeEnvironmentRecord(
      context.lexicalEnv,
      context.realm,
    );
  }

  private readonly _bindings: Map<string, DeclarativeEnvironmentBinding> =
    new Map();

  constructor(
    outerEnv: StaticJsEnvironmentRecord | null,
    protected readonly _realm: StaticJsRealm,
  ) {
    super(outerEnv);
  }

  *hasBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    return this._bindings.has(name);
  }

  *isInitializedEvaluator(name: string): EvaluationGenerator<boolean> {
    const binding = this._bindings.get(name);
    if (!binding) {
      throw new ThrowCompletion(
        this._realm.types.error(
          "ReferenceError",
          `Binding ${name} does not exist in this environment`,
        ),
      );
    }

    return binding.isInitialized;
  }

  *initializeBindingEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    const binding = this._bindings.get(name);
    if (!binding) {
      throw new ThrowCompletion(
        this._realm.types.error(
          "ReferenceError",
          `Binding ${name} does not exist in this environment`,
        ),
      );
    }

    yield* binding.initialize(value);
  }

  *createMutableBindingEvaluator(name: string, deletable: boolean) {
    this._assertBindingNotDeclared(name);

    this._bindings.set(
      name,
      new DeclarativeEnvironmentBinding(
        name,
        true,
        false,
        deletable,
        null,
        this._realm,
      ),
    );
  }

  *createImmutableBindingEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<void> {
    // TODO: Do we throw if not strict?
    this._assertBindingNotDeclared(name);

    this._bindings.set(
      name,
      new DeclarativeEnvironmentBinding(
        name,
        false,
        strict,
        false,
        null,
        this._realm,
      ),
    );
  }

  *setMutableBindingEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void> {
    const binding = this._bindings.get(name);
    if (!binding) {
      if (strict) {
        throw new ThrowCompletion(
          this._realm.types.error("ReferenceError", `${name} is not defined`),
        );
      }

      yield* this.createMutableBindingEvaluator(name, true);
      yield* this.initializeBindingEvaluator(name, value);
      return;
    }

    if (binding.isStrict) {
      strict = true;
    }

    if (!binding.isInitialized) {
      throw new ThrowCompletion(
        this._realm.types.error(
          "ReferenceError",
          `Cannot set value of uninitialized binding ${name}`,
        ),
      );
    } else if (binding.isMutable) {
      yield* binding.set(value);
    } else if (strict) {
      throw new ThrowCompletion(
        this._realm.types.error("TypeError", `Assignment to constant variable`),
      );
    }
  }

  *getBindingValueEvaluator(
    name: string,
    _strict: boolean,
  ): EvaluationGenerator<StaticJsValue> {
    const binding = this._bindings.get(name);
    if (!binding) {
      throw new ThrowCompletion(
        this._realm.types.error("ReferenceError", `${name} is not defined`),
      );
    }

    return yield* binding.get();
  }

  *deleteBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    const binding = this._bindings.get(name);
    if (!binding) {
      throw new StaticJsEngineError(
        `Binding ${name} does not exist in this environment`,
      );
    }

    if (!binding.isDeletable) {
      return false;
    }

    this._bindings.delete(name);
    return true;
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  *hasSuperBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  *getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  protected _assertBindingNotDeclared(name: string) {
    if (this._bindings.has(name)) {
      throw new ThrowCompletion(
        this._realm.types.error(
          "SyntaxError",
          `Identifier ${name} has already been declared`,
        ),
      );
    }
  }
}

class DeclarativeEnvironmentBinding {
  private _value: StaticJsValue | null;

  constructor(
    public readonly name: string,
    public readonly isMutable: boolean,
    public readonly isStrict: boolean,
    public readonly isDeletable: boolean,
    value: StaticJsValue | null,
    private readonly _realm: StaticJsRealm,
  ) {
    this._value = value;
  }

  get isInitialized(): boolean {
    return this._value !== null;
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
