import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";
import type { StaticJsEnvironmentRecord } from "../StaticJsEnvironmentRecord.js";

import { StaticJsEnvironmentRecordBase } from "./StaticJsEnvironmentRecordBase.js";

interface DeclarativeBinding {
  readonly name: string;
  readonly isMutable: boolean;
  readonly isStrict: boolean;
  readonly isDeletable: boolean;
  value: StaticJsValue | null;
}
export class StaticJsDeclarativeEnvironmentRecord extends StaticJsEnvironmentRecordBase {
  static from(context: EvaluationContext) {
    return new StaticJsDeclarativeEnvironmentRecord(context.lexicalEnv, context.realm);
  }

  private readonly _bindings: Map<string, DeclarativeBinding> = new Map();

  constructor(
    outerEnv: StaticJsEnvironmentRecord | null,
    protected readonly _realm: StaticJsRealm,
  ) {
    super(outerEnv);
  }

  *inspectBindingsEvaluator(): EvaluationGenerator<Record<string, StaticJsValue | null>> {
    const result: Record<string, StaticJsValue | null> = {};
    for (const [name, binding] of this._bindings.entries()) {
      result[name] = binding.value;
    }
    return result;
  }

  *hasBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    return this._bindings.has(name);
  }

  *isInitializedEvaluator(name: string): EvaluationGenerator<boolean> {
    const binding = this._bindings.get(name);
    if (!binding) {
      throw yield* Completion.Throw.create(
        "ReferenceError",
        `Binding ${name} does not exist in this environment`,
      );
    }

    return binding.value !== null;
  }

  *initializeBindingEvaluator(name: string, value: StaticJsValue): EvaluationGenerator<void> {
    const binding = this._bindings.get(name);
    if (!binding) {
      throw yield* Completion.Throw.create(
        "ReferenceError",
        `Binding ${name} does not exist in this environment`,
      );
    }

    if (binding.value) {
      throw new Error(`Cannot initialize binding ${name}: Already initialized`);
    }

    binding.value = value;
  }

  *createMutableBindingEvaluator(name: string, deletable: boolean): EvaluationGenerator<void> {
    yield* this._assertBindingNotDeclared(name);

    this._bindings.set(name, {
      name,
      isMutable: true,
      isStrict: false,
      isDeletable: deletable,
      value: null,
    });
  }

  *createImmutableBindingEvaluator(name: string, strict: boolean): EvaluationGenerator<void> {
    // TODO: Do we throw if not strict?
    yield* this._assertBindingNotDeclared(name);

    this._bindings.set(name, {
      name,
      isMutable: false,
      isStrict: strict,
      isDeletable: false,
      value: null,
    });
  }

  *setMutableBindingEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void> {
    const binding = this._bindings.get(name);
    if (!binding) {
      if (strict) {
        throw yield* Completion.Throw.create("ReferenceError", `${name} is not defined`);
      }

      yield* this.createMutableBindingEvaluator(name, true);
      yield* this.initializeBindingEvaluator(name, value);
      return;
    }

    if (binding.isStrict) {
      strict = true;
    }

    if (!binding.value) {
      throw yield* Completion.Throw.create(
        "ReferenceError",
        `Cannot set value of uninitialized binding ${name}`,
      );
    } else if (binding.isMutable) {
      binding.value = value;
    } else if (strict) {
      throw yield* Completion.Throw.create("TypeError", `Assignment to constant variable`);
    }
  }

  *getBindingValueEvaluator(name: string, _strict: boolean): EvaluationGenerator<StaticJsValue> {
    const binding = this._bindings.get(name);
    if (!binding) {
      throw yield* Completion.Throw.create("ReferenceError", `${name} is not defined`);
    }

    if (binding.value == null) {
      throw yield* Completion.Throw.create(
        "ReferenceError",
        `Cannot get value of uninitialized binding ${name}`,
      );
    }

    return binding.value;
  }

  *deleteBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    const binding = this._bindings.get(name);
    if (!binding) {
      throw new StaticJsEngineError(`Binding ${name} does not exist in this environment`);
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

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  protected *_assertBindingNotDeclared(name: string) {
    if (this._bindings.has(name)) {
      throw yield* Completion.Throw.create(
        "SyntaxError",
        `Identifier ${name} has already been declared`,
      );
    }
  }
}
