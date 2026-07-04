import type { EvaluationContext } from "#evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { allocated } from "#memory/allocated.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

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
    return StaticJsDeclarativeEnvironmentRecord.create(context.lexicalEnv, context.realm);
  }

  // NOTE: the parameters are typed as `unknown` (not their real
  // `StaticJsEnvironmentRecord | null` / `StaticJsRealm` types) because this
  // class is subclassed by StaticJsFunctionEnvironmentRecord, which declares its
  // own `static create` with a completely different parameter shape
  // (functionObject, newTarget, lexical, outerEnv, realm). TypeScript requires
  // `typeof Subclass` to be assignable to `typeof StaticJsDeclarativeEnvironmentRecord`
  // for `extends` to typecheck (TS2417), so the base's `create` must accept the
  // subclass's arity/shape. Widening to `unknown` (as fixed optional positional
  // params, so arity is still checked) resolves the conflict; the casts below
  // reconstruct the real parameter shape, so runtime behavior is unchanged.
  static create(
    outerEnv?: unknown,
    realm?: unknown,
    _arg3?: unknown,
    _arg4?: unknown,
    _arg5?: unknown,
  ): StaticJsDeclarativeEnvironmentRecord {
    return allocated(
      new StaticJsDeclarativeEnvironmentRecord(
        outerEnv as StaticJsEnvironmentRecord | null,
        realm as StaticJsRealm,
      ),
    );
  }

  private readonly _bindings: Map<string, DeclarativeBinding> = new Map();

  protected constructor(
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

    // Note: Our set entry and extranious data costs something too...
    this._realm.memory.allocate(StaticJsMemoryAllocationTag.RawString, name);

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

    // Note: Our set entry and extranious data costs something too...
    this._realm.memory.allocate(StaticJsMemoryAllocationTag.RawString, name);

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

  override mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }

    super.mark(marks);

    for (const { value } of this._bindings.values()) {
      if (value) {
        value.mark(marks);
      }
    }
  }

  override allocateSelf(
    allocate: StaticJsAllocator = this._realm.memory.allocate.bind(this._realm.memory),
  ): void {
    for (const name of this._bindings.keys()) {
      allocate(StaticJsMemoryAllocationTag.RawString, name);
    }
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
